const template = `
  
    <div class="profile-avatar">
      <div class="profile-avatar__img card-position">        
       <img class="avatar avatar-card" src="{{ avatar }}" alt="ava"/>      
      </div>  
    </div>
    <div class="card-user d-flex direction-col justify-sb align-start">
      <div class="text-14-500 text-dark">{{title}}</div>
      <div class="text-12-500 text-grey">{{last_message}}</div>
    </div>   
    <div class="d-flex direction-col justify-sb align-c">
      <div class="text-12-500 text-grey">{{lastMsgTime}}</div>
      <div class="msg-icon"><span class="text-12-500 text-white">{{unread_count}}</span></div>
    </div>
 
`;

export default template;
