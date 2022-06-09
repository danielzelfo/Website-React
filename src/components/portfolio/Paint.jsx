import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent
} from 'react-codepen-prefill-embed';

const Paint = () => {
  useCodePenEmbed();
  return (
      <PrefillEmbed defaultTabs={['js', 'result']} penTitle="To-Do List" embedHeight="450" prefillData={{"scripts":["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"]}}>
          <PrefillLang lang="html">
          {stripIndent`
            <html>

            <head>
            </head>

            <body data-rsssl=1>
              <div id="controls">
                <div id="controlOptions">
                  <p>Controls</p><button id='clear'>Clear All</button><br />
                  <button id="erase">Change to Eraser</button><br />
                  <label for="color">Choose Color:</label><input id='color' type='color'><br /><br />
                  <label for="paintSize">Choose Pensil Size:</label><input type="range" min="1" max="100" value="5" id="paintSize">
                </div>
                
                <button id="ctrl">Show Controls</button>
              </div>
              <div id="paint">
                <canvas id="myCanvas"></canvas>
              </div>
            </body>

            </html>
          `}
          </PrefillLang>
          <PrefillLang lang="scss">
          {stripIndent`
            body {
              margin: 0px;
              padding: 0px;
            }
            #paint {
              width: 100%;
              height: 100vh;
            }
            #controls {
              cursor: auto;
              width: 250px;
              position: absolute;
              z-index: 2;
              left: 0;
              top: 0;
              border: 1px solid grey;
              background: lightblue;
              p {
                text-align: center;
                font-weight: bold;
                text-decoration: underline;
                font-family: Arial;
              }
              button,
              input {
                background: white;
                border: 1px solid grey;
              }
              #ctrl {
                width: 100%;
                text-align: center;
                opacity: 0.75;
                &:hover {
                  opacity: 1;
                }
              }
            }

          `}
          </PrefillLang>
          <PrefillLang lang="js">
          {stripIndent`
            var ctrlShown = false;

            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var painting = document.getElementById("paint");
            var paint_style = getComputedStyle(painting);

            $("#controlOptions").hide();
            canvas.width = parseInt(paint_style.getPropertyValue("width"));
            canvas.height = parseInt(paint_style.getPropertyValue("height"));
            var mouse = {
              x: 0,
              y: 0
            };
            canvas.addEventListener(
              "mousemove",
              function(e) {
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
              },
              false
            );
            ctx.lineWidth = 5;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.strokeStyle = "#000000";
            canvas.addEventListener(
              "mousedown",
              function(e) {
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                canvas.addEventListener("mousemove", onPaint, false);
              },
              false
            );
            canvas.addEventListener(
              "mouseup",
              function() {
                canvas.removeEventListener("mousemove", onPaint, false);
              },
              false
            );
            var onPaint = function() {
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            };

            function reSet(){
              color = $("#color").val();
              ctx.lineWidth = $("#paintSize").val();
              ctx.strokeStyle = color;
              ctx.lineJoin = "round";
              ctx.lineCap = "round";
              $("#erase").html("Change to Eraser");
              
            }

            $(document).ready(function() {
              var color = "#000000",
                lascol;
              var erasing = false;

              $("#ctrl").click(function() {
                if (ctrlShown) {
                  $("#controlOptions").hide();
                  $("#ctrl").html("Show Controls");
                  ctrlShown = false;
                } else {
                  $("#controlOptions").show();
                  $("#ctrl").html("Hide Controls");
                  $("#color").on("change", function() {
                    color = $("#color").val();
                    ctx.strokeStyle = color;
                    reSet();
                  });
                  $("#paintSize").on("change", function() {
                    ctx.lineWidth = $("#paintSize").val();
                    reSet();
                  });

                  $("#erase").click(function() {
                    
                    if (erasing) {
                      ctx.strokeStyle = color;
                      $("#erase").html("Change to Eraser");
                      erasing = false;
                    } else {
                      console.log(erasing);
                      ctx.strokeStyle = "#ffffff";
                      $("#erase").html("Change to Pensil");
                      erasing = true;
                    }
                  });
                  $("#clear").click(function() {
                    canvas.height = parseInt(paint_style.getPropertyValue("height")) - 1;
                    canvas.height = parseInt(paint_style.getPropertyValue("height"));
                    reSet();
                  });
                  ctrlShown = true;
                }
              });
            });
          `}
          </PrefillLang>
      </PrefillEmbed>
  );
};

export default Paint;