class Notification {
    constructor(notificationID,createdTime,content,receiver){
      this.notificationID = notificationID
      this.createdTime = createdTime
      this.content = content
      this.receiver = receiver
    }
  
    send(){
      console.log(`Notification has been sent to ${this.receiver}`)
    }
   }
  
  class EmailNotification extends Notification{ 
    constructor(notificationID,createdTime,content,receiver){
      super(notificationID,createdTime,content,receiver)
    }
  }
  
  class SMSNotification extends Notification{ 
    constructor(notificationID,createdTime,content,receiver){
      super(notificationID,createdTime,content,receiver)
    }
  }
  
  let sendEmail = new EmailNotification("1","22.30","Good Bye","John")
  sendEmail.send()
  
  let sendSMS = new SMSNotification("2","23.00","Good Night","0999999999")
  sendSMS.send()