function checkAgeNotNegative(age) {
  if(age < 0) {
    showMessage('Alter kann nicht negativ sein.');
  }
}

function checkAgeIsNumber(age) {
  if(!(!isNaN(parseFloat(age)) && isFinite(age))) {
    showMessage('Alter muss Zahl sein.');
  }
}

function clearMessage() {
  showMessage('');
}

function showMessage(message) {
  const output = document.getElementById('output');
  output.textContent = message;
}

function getAgeValue() {
  const element = document.getElementById('age');
  const age = element.value;
  return age;
}

function addEvent(element, eventType, eventHandler) {
  if (window.addEventListener) {
    element.addEventListener(eventType, eventHandler, false);
  }
  else if (window.attachEvent) {
    element.attachEvent('on' + eventType, eventHandler);
  }
  else {
    element['on' + eventType] = eventHandler;
  }
}

function init() {
  const element = document.getElementById('age');
  addEvent(
    element,
    'blur',
    clearMessage
  );
  addEvent(
    element,
    'blur',
    function() {
      const age = getAgeValue();
      checkAgeNotNegative(age);
    }
  );
  addEvent(
    element,
    'blur',
    function() {
      const age = getAgeValue();
      checkAgeIsNumber(age);
    }
  );
}

document.addEventListener('DOMContentLoaded', init);