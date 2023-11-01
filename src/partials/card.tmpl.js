export default `
  <div class="card">
    {{>avatar }}
    <div class="card-user d-flex direction-col justify-sb align-start">
      <div class="text-14-500 text-dark">{{userName}}</div>
      <div class="text-12-500 text-grey">{{userMsg}}</div>
    </div>   
    <div class="d-flex direction-col justify-sb align-c">
      <div class="text-12-500 text-grey">{{lastMsgTime}}</div>
      <div class="msg-icon"><span class="text-12-500 text-white">2</span></div>
    </div>
  </div>
`
