import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent
} from 'react-codepen-prefill-embed';

const TodoList = () => {
  useCodePenEmbed();
  
  return (
      <PrefillEmbed defaultTabs={['js', 'result']} penTitle="To-Do List" embedHeight="450" prefillData={{"scripts":["https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"]}}>
          <PrefillLang lang="html">
          {stripIndent`
            <div id="all">
            <div id="func">
            <button id='rmv' >x</button>
            <button id='crsout'>-</button>
            <button id='flsrn'><-></button>
              </div>
              <hr>
            <div id="top">
                <h1>To-Do List</h1>
            </div>
            <div id="to-do_list">
            </div>
            <div id="bottom">
                <button id="increase">add more</button>
            </div>
            </div>
          `}
          </PrefillLang>
          <PrefillLang lang="scss">
          {stripIndent`
            $bk: linear-gradient(135deg, rgba(158,15,184,0.75) -10%, rgba(5,232,255,0.9) 135%), url('https://i.imgur.com/x954uMR.jpg');
            #all {
                font-family: 'Noto Sans', sans-serif;
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                background: $bk;
                background-size: cover;
                width: 360px;
                border: 1px solid rgba(0, 0, 0, .5);
                border-radius: 7px;
              hr{
                position: relative;
                top: 10px;
              }
              #func {
                *{
                  position: absolute;
                  opacity: .5;
                  background: rgba(0,0,0,.5);
                  color: white;
                  border: 0;
                  border-radius: 5px;
                  &:focus {
                    outline: none;
                  }
                }
                #flsrn {
                  right: 0;
                }
              #crsout{
                left: 50%;
                transform: traslate(-50%);
              }
              }
              #stats {
                #finished {
                  
                }
              }
                #top {
                  h1 {
                    text-align: center;
                    font-size: 25px;
                    color: white;
                  }
                }
                #to-do_list {
                  height: 235px;
                  background: rgba(255, 255, 255, .95);
                  * { display: inline }
                    .item {
                      position: relative;
                      height: 35px;
                      width: 95%;
                      left: 50%;
                      transform: translate(-50%);
                      background: none;
                      border: none;
                        border-bottom: 1px solid rgba(0,0,0,.5);
                        font-size: 15px;
                        font-weight: bold;
                        color: #636363;
                      &:focus {
                        outline: none;
                      }
                    }
                }
                #bottom {
                    background: white;
                    border-bottom-right-radius: 7px;
                    border-bottom-left-radius: 7px;
                    button {
                        font-size: 12.5px;
                        color: rgba(255, 255, 255, .75);
                        padding: 2.5px;
                        position: relative;
                        left: 50%;
                        transform: translate(-50%);
                        width: 100px;
                        background: $bk;
                        border: 0;
                        border-radius: 5px;
                        &:focus {
                            outline-style: none;
                        }
                    }
                }
            }

            .removeclass {
              border-radius: 10px;
            }

            .finished {
              text-decoration: line-through;
            }


            .rmvanimation {
              animation: removeA .5s;
            }

            @keyframes removeA {
              from{height: auto};
              to{height: auto + 38};
            }
          `}
          </PrefillLang>
          <PrefillLang lang="js">
          {stripIndent`
            $('#to-do_list').html("<input class='item' spellcheck='false'>".repeat(6));
            var rmvstr = false,
              crsout = false,
              firstCross = true,
              wI = false;

            function add() {
              if (rmvstr) {
                remove();
              } else if (crsout) {
                crossout();
              }
              $('#to-do_list').animate({
                height: "+=38"
              }, {
                duration: 500,
                complete: function() {
                  $('#to-do_list').append("<input class='item' spellcheck='false'>");
                  if (rmvstr) {
                    $('.item').removeClass('removeclass');
                    $(".item").toggleClass('removeclass');
                  }
                }
              });
            }

            function remove() {
              if (crsout) {
                crossout();
              }
              if (rmvstr) {
                $("#rmv").html('x');
                rmvstr = false;
                $(".item").css({
                  cursor: "auto",
                  "border-radius": "0",
                  background: "none"
                });
              } else {
                $("#rmv").html('Tap to Remove');
                rmvstr = true;
                $(".item").css({
                  cursor: "pointer",
                  "border-radius": "15px",
                  background: "rgba(255,0,0,.25)"
                });
                if (firstCross) {
                  $(document).on('click', '.item', function() {
                    if (rmvstr) {
                      $(this).blur();
                      $(this).remove();
                      $('#to-do_list').animate({
                        height: "-=38"
                      }, {
                        duration: 500
                      });
                    }
                  });
                  firstCross = false;
                }
              }
            }

            function crossout() {
              if (rmvstr) {
                remove();
              }
              if (crsout) {
                $("#crsout").html("-");
                $("#crsout").css("transform", "translate(-50%)");
                crsout = false;
                $(".item").css("cursor", "auto");
                $(document).on('click', '.item', function() {
                  $(this).focus();
                  $(this).removeClass("finished");
                });
                $(document).on('mouseover', '.item', function() {
                  if ($(this).hasClass("finished")) {
                    $(this).css({
                      opacity: "1",
                      color: "red"
                    });
                  } else {
                    $(this).css({
                      opacity: "1",
                      color: "#636363"
                    });
                  }
                });
              } else {
                $("#crsout").html("Tap to Cross Out");
                $("#crsout").css("transform", "translate(-50%)");
                crsout = true;
                $(".item").css("cursor", "pointer");
                $(document).on('click', '.item', function() {
                  $(this).blur();
                  $(this).toggleClass("finished");
                });
                $(document).on('mouseover', '.item', function() {
                  $(this).css({
                    "opacity": ".75",
                    color: 'red'
                  });
                });
                $(document).on('mouseout', '.item', function() {
                  if ($(this).hasClass("finished")) {
                    $(this).css({
                      "opacity": "1",
                      color: "red"
                    });
                  } else {
                    $(this).css({
                      "opacity": "1",
                      color: "#636363"
                    });
                  }
                });
              }
            }

            function fullscreen() {
              if (rmvstr) {
                remove();
              } else if (crsout) {
                crossout();
              }
              if (!wI) {
                wI = true;
                $("#all").animate({
                  width: '95%'
                }, {
                  complete: function() {
                    $("#flsrn").html(">-<");
                  }
                });
              } else {
                wI = false;
                $("#all").animate({
                  width: '360px'
                }, {
                  complete: function() {
                    $("#flsrn").html("<->");
                  }
                });
              }
            }
            $("#increase").click(function() {
              add();
            });

            $("#flsrn").click(function() {
              fullscreen();
            });
            $("#rmv").click(function() {
              remove();
            });
            $("#crsout").click(function() {
              crossout();
            });

            var inputs = $("#to-do_list input").keypress(function(e) {
              if (e.which == 13) {
                e.preventDefault();
                var nextInput = inputs.get(inputs.index(document.activeElement) + 1);
                if (nextInput) {
                  nextInput.focus();
                }
              }
            });
          `}
          </PrefillLang>
      </PrefillEmbed>
  );
};

export default TodoList;