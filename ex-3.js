//  Start coding here
class user{
    constructor(id,name,email){
      this.id = id
      this.name = name
      this.email = email
    }
  
  }
  
  class postList{
    constructor(posts){
      this.posts = []
    }
  
    addPost(posts){
      this.post.push(posts)
    }
  
    sharePost(post){
      console.log(`You've shared post "${posts}" to your friend.`)
    }
  }
  
  class Post{
    constructor(id,title,content,comment){
      this.id = id
      this.title = title
      this.content = content
      this.comment = []
    }
  
    addComment(comment){
      this.comment.push(comment)
    }
  }
  
  class Comment{
    constructor(id,content,createdBy,like){
      this.id = id
      this.content = content
      this.createdBy = createdBy
      this.like = 0
    }
  
    addlike(){
      this.like++
    }
  }
  
  class Facebook{
    constructor(groupList,pageList){
      this.groupList = []
      this.pageList = []
    }
  
    addGroup(group){
      this.groupList.push(group)
    }
    addPage(page){
      this.pageList.push(page)
    }
  }
  
  class FacebookPage{
    constructor(name){
      this.name = name
    }
  }
  
  class FacebookGroup{
    constructor(name){
      this.name = name
    }
  }
  
  class Notification{
    constructor(id){
      this.id = id
    }
  
    send(){
      console.log(`Notification: ${this.name} has just commented on this post—"${this.post}"`)
    }
  }