const template = `
  <div class="card">
    <div class="avatar">
      <!-- <img src="" alt="avatar"> -->
      <svg width="34" height="34" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.5" cy="23.5" r="23.5" fill="#EFEFEF"/>
      </svg>
    </div>
    <div class="card-user d-flex direction-col justify-sb align-start">
      <div class="text-14-500 text-dark">{{userName}}</div>
      <div class="text-12-500 text-grey">{{userMsg}}</div>
    </div>   
    <div class="d-flex direction-col justify-sb align-c">
      <div class="text-12-500 text-grey">{{lastMsgTime}}</div>
      <div class="msg-icon"><span class="text-12-500 text-white">{{msgCount}}</span></div>
    </div>
  </div>
`

export default template
