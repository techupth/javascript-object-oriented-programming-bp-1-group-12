class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
      this.notificationId = notificationId;
      this.createdTime = createdTime;
      this.content = content;
      this.receiver = receiver;
    }
  
    send() {
      console.log(`Notification has been sent to ${this.receiver}`);
    }
  }
  
class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
      this.notificationId = notificationId;
      this.createdTime = createdTime;
      this.content = content;
      this.phoneNumber = phoneNumber;
    }
  
    send() {
      console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
  }
  
  const emailNotification = new EmailNotification(
    "001",
    "2023-10-08 10:00",
    "Hello, this is an email notification",
    "example@example.com"
  );
  emailNotification.send();
  
  const smsNotification = new SMSNotification(
    "002",
    "2023-10-08 10:15",
    "Hello, this is an SMS notification",
    "1234567890"
  );
  smsNotification.send();
  