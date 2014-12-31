var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
var info_start = 'Click on the start button and begin speaking for as long as you like.';
var info_speak_now = 'Speak now.';
var info_no_speech = 'No speech was detected. You may need to adjust your microphone settings.';
var info_no_microphone = 'No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly.'; 
var info_allow = 'Click the "Allow" button above to enable your microphone.';
var info_denied = 'Permission to use microphone was denied.';
var info_blocked = 'Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream';
var info_upgrade = 'Not supported by this browser. Upgrade to Chrome version 25 or later.';

if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  supported();
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onstart = function() {
    start_button.innerHTML = 'Stop';
    recognizing = true;
    info.innerHTML = info_speak_now;
  };
  
  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
      info.innerHTML = info_no_speech;
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      info.innerHTML = info_no_microphone;
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        info.innerHTML = info_blocked;
      } else {
        info.innerHTML = info_denied;
      }
      ignore_onend = true;
    }
  };

  recognition.onend = function() {
    start_button.innerHTML = 'Start';
    info.innerHTML = info_start;
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    if (!final_transcript) {
      info.innerHTML = info_start;
      return;
    }
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
  };

  recognition.onresult = function(event) {
    if (typeof(event.results) == 'undefined') {
      recognition.onend = null;
      recognition.stop();
      upgrade();
      return;
    }
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
         final_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
  };
}

function supported(){
  $(document).ready(function(){
      info.innerHTML = info_start;
    });
}

function upgrade() {
  $(document).ready(function(){
     start_button.style.visibility = 'hidden'
     info.innerHTML = info_upgrade;
    });
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang = 'en';
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
  info.innerHTML = info_allow;
  start_timestamp = event.timeStamp;
}
