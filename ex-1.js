class EmailNotification {
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
  
  
  class SMSNotification { 
    constructor(notificationID,createdTime,content,phoneNumber){
      this.notificationID = notificationID
      this.createdTime = createdTime
      this.content = content
      this.phoneNumber = phoneNumber
    }
  
    send(){
      console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
  }
  
  let sendEmail = new EmailNotification("1","22.30","Good Bye","John")
  sendEmail.send()
  
  let sendSMS = new SMSNotification("2","23.00","Good Night","0999999999")
  sendSMS.send()