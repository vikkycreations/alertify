

var container = document.createElement('div');
container.setAttribute('id', 'alertify-wrapper');
document.body.lastElementChild.parentNode.insertBefore(container, document.body.lastElementChild.nextSibling);

var lastID = 0;

class alertify {
  constructor() {
    let props;
    if (typeof (arguments[0]) !== 'object') {
      if (arguments.length === 1) {
        props = {
          text: arguments[0],
        }
      }
      else if (arguments.length === 2) {
        props = {
          title: arguments[0], text: arguments[1],
        }
      }
      else if (arguments.length === 3) {
        props = {
          title: arguments[0], text: arguments[1], type: arguments[2],
        }
      }
      else if (arguments.length === 4) {
        props = {
          title: arguments[0], text: arguments[1], type: arguments[2], position: arguments[3]
        }
      }
      else {
        const [title, text, type, position, showSuccessbtn, showCancelbtn, openBy, closeBy, footer] = arguments;
        props = { title: title, text: text, type: type, position: position, footer: footer, showSuccessbtn: showSuccessbtn, showCancelbtn: showCancelbtn, openBy: openBy, closeBy: closeBy }
      }
    }
    else props = arguments[0];


    const {
      text = '',
      title = '',
      type = null,
      position = 'top',
      showSuccessbtn = true,
      showCancelbtn = false,
      openBy = 'ZoomIn',
      closeBy = 'ZoomOut',
      footer = '',
    } = props;
    this.type = type;
    this.title = title;
    this.text = text;
    this.position = position;
    this.footer = footer;
    this.showSuccessbtn = showSuccessbtn;
    this.showCancelbtn = showCancelbtn;
    this.parentElement = container;
    this.target = this.createAlert();
    this.alert = function () {
      this.parentElement.classList.add(this.position);
      this.parentElement.appendChild(this.target);
      this.parentElement.classList.add('show');
      this.target.classList.remove(closeBy);
      this.target.classList.add(openBy);
      let btn = this.target.getElementsByClassName('alertify-successbtn')[0]
      Boolean(btn) && btn.focus();
    };
    this.close = function () {
      this.target.classList.remove(openBy);
      this.target.classList.add(closeBy);
    };
    this.parentElement.addEventListener('click', (e) => {
      if (['alertify-wrapper', 'alertify-success-btn', 'alertify-cancel-btn'].indexOf(e.target.id) !== -1) {
        this.close();
      }
    });
    this.target.addEventListener('animationend', (e) => {
      if (e.animationName === closeBy) {
        this.parentElement.classList.remove('show');
        this.parentElement.hasChildNodes() && this.parentElement.removeChild(this.target);
        this.parentElement.classList.remove(this.position)
      }
    });

  }
}


alertify.prototype.createAlert = function () {

  const { text, title, footer, type, showSuccessbtn, showCancelbtn } = this;

  let TYPE_IMAGE = Boolean(type) ? this.Icons[type] : '';
  let TITLE = Boolean(title) ? `<h4>${title}</h4>` : '';
  let TEXT = Boolean(text) ? `<div class='content'>${text}</div>` : '';

  let SUCCESSBTN = Boolean(showSuccessbtn) ? `<button class='alertify-successbtn' id='alertify-success-btn' data-type=${type}>ok</button>` : '';
  let CANCELBUTTON = Boolean(showCancelbtn) ? `<button class='alertify-cancelbtn' id='alertify-cancel-btn' data-type=${type}>cancel</button>` : '';

  let ALERT_ACTIONS = (showCancelbtn || showSuccessbtn) ? `<div class='alertify-actions'>${CANCELBUTTON} ${SUCCESSBTN}</div>` : '';
  let FOOTER = Boolean(footer) ? `<div class='alertify-footer'>${footer}</div>` : '';

  const ALERT = document.createElement('div');
  ALERT.classList.add('container')
  ALERT.setAttribute('id', `alertify-alert-${lastID++}`);
  ALERT.innerHTML = `${TYPE_IMAGE}${TITLE}${TEXT}${ALERT_ACTIONS}${FOOTER}`

  return ALERT;

}


alertify.prototype.Icons = {
  danger: `<svg height="512pt" viewBox="0 0 512 512" width="512pt" class="alertify-type-icon" id="alertify-danger-icon"
  xmlns="http://www.w3.org/2000/svg">
  <path d="m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0-.378906.011719-.769531.011719-1.160156.011719-68.371094 0-132.660156-26.621094-181.011719-74.980469-48.359375-48.347656-74.988281-112.640625-74.988281-181.019531s26.628906-132.660156 74.988281-181.019531c48.351563-48.351563 112.640625-74.980469 181.011719-74.980469.390625 0 .769531 0 1.160156.0117188.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0" fill="#ff771a"/>
  <path d="m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0v-511.9765622c.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0" fill="#ff4a05"/>
  <path d="m257.265625 107.804688c.417969-.007813-.363281 0 0 0zm0 0"/>
  <path d="m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375c-10.988281-.320313-22.332031-4.757813-30.058594-12.488282-8.050781-8.058593-12.492187-18.769531-12.492187-30.171874v-114.4375c0-23.261719 19.3125-41.992188 42.550781-42.660157h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0" fill="#fff"/>
  <path d="m257.265625 307.5625c-.363281 0 .363281.007812 0 0zm0 0"/>
  <path d="m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563c-22.210937-.050781-40.269531-18.140625-40.269531-40.378906 0-22.230469 18.058594-40.320313 40.269531-40.371094h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0" fill="#fff"/>
  <g fill="#ddebf0">
    <path d="m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563v-80.75h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0"/>
    <path d="m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375v-199.757813h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0"/>
  </g>
</svg>`,
  success: `<svg version="1.1" id="alertify-success-icon" class="alertify-type-icon"
	xmlns="http://www.w3.org/2000/svg" 
	xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
	<path style="fill:#77DD00;" d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z"/>
	<path style="fill:#66BB00;" d="M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z"/>
	<polygon style="fill:#E7E7E7;" points="401.8,212.5 226,388.299 99.699,262.299 142.301,219.699 226,303.699 256,273.699 
	359.5,170.2 "/>
	<polygon style="fill:#D3D3D8;" points="401.8,212.5 256,358.299 256,273.699 359.5,170.2 "/>
</svg>
`,
  info: `<svg version="1.1" id="alertify-info-icon" class="alertify-type-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#0A4EAF;" d="M256,512c-68.38,0-132.667-26.629-181.02-74.98C26.629,388.667,0,324.38,0,256
	S26.629,123.333,74.98,74.98C123.333,26.629,187.62,0,256,0s132.667,26.629,181.02,74.98C485.371,123.333,512,187.62,512,256
	s-26.629,132.667-74.98,181.02C388.667,485.371,324.38,512,256,512z"/>
<path style="fill:#063E8B;" d="M437.02,74.98C388.667,26.629,324.38,0,256,0v512c68.38,0,132.667-26.629,181.02-74.98
	C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z"/>
<path style="fill:#FFFFFF;" d="M256,185c-30.327,0-55-24.673-55-55s24.673-55,55-55s55,24.673,55,55S286.327,185,256,185z M301,395
	V215H191v30h30v150h-30v30h140v-30H301z"/>
<g>
	<path style="fill:#CCEFFF;" d="M256,185c30.327,0,55-24.673,55-55s-24.673-55-55-55V185z"/>
	<polygon style="fill:#CCEFFF;" points="301,395 301,215 256,215 256,425 331,425 331,395 	"/>
</g>
</svg>
`,
  warning: `<svg height="511pt" id="alertify-warning-icon" class="alertify-type-icon" viewBox="0 -26 511.82388 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m439.210938 459.449219h-366.609376c-25.160156 0-48.53125-13.027344-61.757812-34.433594-13.230469-21.402344-14.433594-48.128906-3.179688-70.636719l183.304688-313.832031c12.300781-24.59375 37.4375-40.132813 64.9375-40.132813s52.636719 15.539063 64.9375 40.132813l183.304688 313.832031c11.253906 22.507813 10.050781 49.234375-3.179688 70.636719-13.226562 21.40625-36.59375 34.433594-61.757812 34.433594zm0 0" fill="#f0c419"/>
<path d="m439.253906 459.449219h-183.347656v-459.035157c27.566406-.171874 52.804688 15.429688 64.972656 40.167969l183.257813 313.820313c11.269531 22.492187 10.082031 49.21875-3.136719 70.621094-13.222656 21.40625-36.585938 34.433593-61.746094 34.425781zm0 0" fill="#f29c1f"/>
<path d="m291.21875 380c0 19.503906-15.8125 35.3125-35.3125 35.3125s-35.308594-15.808594-35.308594-35.3125c0-19.5 15.808594-35.308594 35.308594-35.308594s35.3125 15.808594 35.3125 35.308594zm0 0" fill="#35495e"/>
<path d="m291.21875 380c0 9.367188-3.71875 18.347656-10.339844 24.972656-6.625 6.621094-15.605468 10.339844-24.972656 10.339844v-70.621094c9.367188-.003906 18.347656 3.714844 24.972656 10.339844 6.621094 6.621094 10.339844 15.605469 10.339844 24.96875zm0 0" fill="#2c3e50"/>
<path d="m255.90625 71.035156c19.5 0 35.3125 15.808594 35.3125 35.3125v167.722656c0 19.5-15.8125 35.308594-35.3125 35.308594s-35.308594-15.808594-35.308594-35.308594v-167.722656c0-19.503906 15.808594-35.3125 35.308594-35.3125zm0 0" fill="#35495e"/>
<path d="m291.21875 106.347656v167.722656c0 9.367188-3.71875 18.347657-10.339844 24.96875-6.625 6.625-15.605468 10.34375-24.972656 10.339844v-238.34375c9.367188-.011718 18.359375 3.703125 24.984375 10.328125 6.621094 6.625 10.339844 15.613281 10.328125 24.984375zm0 0" fill="#2c3e50"/>
</svg>`

}

