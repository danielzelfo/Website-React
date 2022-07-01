import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent
} from 'react-codepen-prefill-embed';

const PixelatedPaint = () => {
  useCodePenEmbed();
  return (
      <PrefillEmbed defaultTabs={['js', 'result']} penTitle="To-Do List" embedHeight="450" prefillData={{"scripts":["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"]}}>
          <PrefillLang lang="html">
          {stripIndent`
            <div class="T"></div>
            <div id="controls">
              <button id="showctrl">Show Controls</button>
            </div>
          `}
          </PrefillLang>
          <PrefillLang lang="scss">
          {stripIndent`
            html {
              overflow-y: hidden;
              cursor: none
            }
            .R {
              display: table-row;
              height: 10px;
              width: 100%;
            }
            .C {
              display: table-cell;
              width: 10px;
              height: 10px;
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
              p{
                text-align: center;
                font-weight: bold;
                text-decoration: underline;
                font-family: Arial;
              }
              button, input {
                background: white;
                border: 1px solid grey;
              }
              #hidectrl, #showctrl{
                width: 100%;
                text-align: center;
                opacity: .75;
                &:hover{
                  opacity: 1;
                }
              }
            }
          `}
          </PrefillLang>
          <PrefillLang lang="js">
          {stripIndent`
            var color = "black",
            unclicked = true, 
            onit, rescol, lascol;

            $(".T").html("<div class='R'></div>".repeat(Math.round(window.screen.availHeight / 10 + ((4 / 90) * (window.screen.availHeight / 10)))));
            $(".R").html("<div class='C'></div>".repeat(window.screen.availWidth / 10));

            $(".C").on('click mousedown', function(){
            $(this).css({background: color,
                        'border-radius': 0});
            onit= false;
            }).hover(function(e) {
            rescol = $(this).css('background');
            if (color == 'white') {
              if ($(this).css('background').split(' none')[0] == "rgba(0, 0, 0, 0)") {
                  $(this).css({
                    border: '1px solid grey',
                    outline: '1px solid white'
                  })
              } else {
                  $(this).css({
                    border: '1px solid ' + $(this).css('background').split(' none')[0],
                    'border-right': '2px solid ' + $(this).css('background').split(' none')[0],
                    'border-left': '2px solid ' + $(this).css('background').split(' none')[0],
                  })
              }
              $(this).css({
                  height: '5px',
                  width: '5px',
                  background: 'white'
              });
            } else {
              $(this).css({
                  border: '1px solid ' + color,
                  height: '8px',
                  width: '8px',
                  'border-radius': '100%',
                  background: 'white'
              });
            }
            onit = true;
            if (e.buttons == 1 || e.buttons == 3) {
              onit = false;
              if(color != 'white'){
                  $(this).css({
                    background: color,
                    opacity: 1,
                    height: '10px',
                    width: '10px',
                    border: 'none',
                    'border-radius': 0
                  });
              }
            }
            }, function() {
            $(this).css({"opacity": ".9",
                        border: 'none'});
            if (onit) {
              $(this).css({
                  border: 'none',
                  outline: 'none',
                  'border-radius': 0,
                  background: rescol
              });
            }
            }).on("mousedown", function(event) {
            event.preventDefault ? event.preventDefault() : event.returnValue = false;
            });

            function controls() {
            $("#showctrl").click(function() {
              $("#controls").html("<p>Controls</p><button id='clear'>Clear All</button><br /><button id='erase'>Change to Eraser</button><br /><label for='color'>Choose Color:</label><input id='color' type='color'><br /><br /><button id='hidectrl'>Hide Controls</button>");
              $("#color").on("change", function() {
                  color = $("#color").val();
              });
              $("#hidectrl").click(function() {
                  $("#controls").html("<button id='showctrl''>Show Controls</button>");
                $("#color").val(color);
                  controls();
              });
              $("#clear").click(function() {
                  $(".C").css("background", "none");
              });
              $("#erase").on('click', function() {
                  if (unclicked) {
                    lascol = color;
                    color = 'white';
                    unclicked = false;
                    $(this).html('Change Back to Pencil');
                  } else {
                    color = lascol;
                    unclicked = true;
                    $(this).html('Change to Eraser');
                  }
              })
            });
            }
            controls();
          `}
          </PrefillLang>
      </PrefillEmbed>
  );
};

export default PixelatedPaint;