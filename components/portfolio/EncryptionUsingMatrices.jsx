import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent
} from 'react-codepen-prefill-embed';

const EncryptionUsingMatrices = () => {
  useCodePenEmbed();
  return (
      <PrefillEmbed defaultTabs={['js', 'result']} penTitle="To-Do List" embedHeight="450" prefillData={{"scripts":["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"]}}>
          <PrefillLang lang="html">
          {stripIndent`
            <h1>Text Encryptor</h1>
            <center>
              <hr>
              <input type="text" id="target_en" placeholder="Message To Encrypt"><button id="done_en">Go</button> OR <input type="text" id="target_de" placeholder="Message To Decrypt"><button id="done_de">Go</button><br />
              <hr>
              <input type="password" id="depass" placeholder="passcode">
            </center>
            <div id="output">
              <p id="targetconv"></p>
              <p><u>Decode Passcode:</u> <span id="passcode"></span></p>
              <p><u>Decoded Message:</u> <span id="decoded"></span></p>
            </div>
          `}
          </PrefillLang>
          <PrefillLang lang="css">
          {stripIndent`
            html{
              background-color: lightgrey;
            }
            #output {
              background-color: rgba(255,255,255,.75);
              position: relative;
              top: -10px;
            }
            #comp{
              position: absolute;
              left:2;
              top: 0;
              font-size: 10px;
              opacity: .75;
            }
            h1{
              text-align: center;
              font-size: 25px;
              text-decoration: underline;
            }
          `}
          </PrefillLang>
          <PrefillLang lang="js">
          {stripIndent`
            var target, pscd_o, Rtarget, pass, Rdet, newAL, newAR, newA;
            $("p").hide();
            $("#comp").show();
            $("#depass").hide();
            $("#done_en").on("click", function() {
              encode();
            });
            $("#done_de").on("click", function() {
              decode();
            });
            $("#target_de").on("focus", function() {
              $("#depass").fadeIn(500);
            });
            $("#target_en").on("click focus", function() {
              $("#depass").fadeOut(500);
            });
            $("#target_en").on('keydown', function(e) {
              if (e.which == 13) {
                  e.preventDefault();
                  encode();
              }
            });
            $("#depass, #target_de").on('keydown', function(e) {
              if (e.which == 13) {
                  e.preventDefault();
                  decode();
              }
            });

            function encode() {
              $("div p:nth-child(3)").hide();
              target = $("#target_en").val();
              $("#target_en").val('');
              if(target.length % 2 != 0){
                target += "ر";
              }
              target = pairs(target);
              for (var e = 0; e < target.length; e++) {
                  for (var f = 0; f < 2; f++) {
                    target[e][f] = target[e][f].charCodeAt(0);
                  }
              }
              var MaA = {
                  a: Math.floor((Math.random() * 50) + 1),
                  b: Math.floor((Math.random() * 50) + 1),
                  c: Math.floor((Math.random() * 50) + 1),
                  d: Math.floor((Math.random() * 50) + 1)
              };
              target = target.join(',').replace(/(,[^,]*),/g, '$1 ').replace(/,/g, ".").split();
              target = target.join().split(/ /g);
              var ntarget = [];
              for (var h = 0; h < target.length; h++) {
                  target[h] = target[h].split(".");
                  for (var i = 0; i < target[h].length; i++) {
                    target[h][i] = parseInt(target[h][i]);
                  }
                  ntarget.push([target[h][0] * MaA.a + target[h][1] * MaA.c, target[h][0] * MaA.b + target[h][1] * MaA.d]);
              }
              ntarget = ntarget.join(',').replace(/(,[^,]*),/g, '$1 ').replace(/,/g, ".").replace(/NaN/g, '?');
              $("div p:first-child").show();
              $("div p:nth-child(2)").show();
              $("#targetconv").html("<u>New Message:</u><br />" + ntarget);
              pscd_o = MaA.a + '.' + MaA.b + ' ' + MaA.c + '.' + MaA.d;
              $("#passcode").html('<br />' + pscd_o);
            }

            function decode() {
              $("div p:first-child").hide();
              $("div p:nth-child(2)").hide();
              Rtarget = $("#target_de").val();
              $("#target_de").val('');
              pass = $("#depass").val();
              $("#depass").val('');
              Rtarget = Rtarget.split(' ');
              for (var j = 0; j < Rtarget.length; j++) {
                  Rtarget[j] = Rtarget[j].split('.');
              }
              pass = pass.split(' ');
              for (var k = 0; k < pass.length; k++) {
                  pass[k] = pass[k].split('.');
              }
              var MaB = {
                  a: pass[0][0],
                  b: pass[0][1],
                  c: pass[1][0],
                  d: pass[1][1]
              };
              Rdet = 1 / (MaB.a * MaB.d - MaB.b * MaB.c);
              var IMaB = {
                  a: Rdet * MaB.d,
                  b: Rdet * MaB.b * -1,
                  c: Rdet * MaB.c * -1,
                  d: Rdet * MaB.a
              };
              var nRtarget = [];
              for (var l = 0; l < Rtarget.length; l++) {
                  nRtarget.push([Math.round(Rtarget[l][0] * IMaB.a + Rtarget[l][1] * IMaB.c), Math.round(Rtarget[l][0] * IMaB.b + Rtarget[l][1] * IMaB.d)]);
                  for (var u = 0; u < Rtarget[l].length; u++) {
                    nRtarget[l][u] = nRtarget[l][u].toString();
                  }
              }
              for (var n = 0; n < nRtarget.length; n++) {
                  for (var o = 0; o < 2; o++) {
                    nRtarget[n][o] = String.fromCharCode(nRtarget[n][o]);
                  }
              }
              $("div p:nth-child(3)").show();
              $("#decoded").html(nRtarget.toString().replace('ر', '').replace(/,/g, '').replace(/NaN/g, ''));
            }

            function pairs(A) {
              newAL = [];
              newAR = [];
              newA = [];
              for (var q = 0; q < A.length; q++) {
                  if (q % 2 === 0) {
                    newAL.push(A[q]);
                  } else {
                    newAR.push(A[q]);
                  }
              }
              for (var r = 0; r < newAL.length; r++) {
                  newA.push([newAL[r], newAR[r]]);
              }
              return newA;
            }
          `}
          </PrefillLang>
      </PrefillEmbed>
  );
};

export default EncryptionUsingMatrices;