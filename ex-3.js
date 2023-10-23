//  Start coding here
class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
class PostList {
    constructor() {
      this.posts = [];
    }
  
    addPost(post) {
      this.posts.push(post);
    }
  
    sharePost(post) {
      console.log(`You've shared post "${post.title}" to your friend.`);
    }
  }

class Post {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.comments = [];
  
      this.addComment = (comment) => {
        this.comments.push(comment);
      };
    }
  }

class Comment {
    constructor(id, content, createdBy) {
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.like = 0;
    }
  
    addLike() {
      this.like++;
    }
  }
  
class Facebook {
    constructor() {
      this.groupList = [];
      this.pageList = [];
    }
  
    addGroup(group) {
      this.groupList.push(group);
    }
  
    addPage(page) {
      this.pageList.push(page);
    }
  }

class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }
    
class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }
  
class Notification {
    constructor(id) {
      this.id = id;
    }
  
    send(commentCreatedBy, postTitle) {
      console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
  }
  
  // Create instances and test the classes
  const user = new User("user1", "John", "john@example.com");
  const post = new Post("post1", "My First Post", "This is the content of my first post.");
  const comment = new Comment("comment1", "Great post!", "Alice");
  
  post.addComment(comment);
  
  const postList = new PostList();
  postList.addPost(post);
  postList.sharePost(post);
  
  const group = new FacebookGroup("Web Developers");
  const page = new FacebookPage("Tech News");
  
  const facebook = new Facebook();
  facebook.addGroup(group);
  facebook.addPage(page);
  
  const notification = new Notification("notification1");
  notification.send("Alice", "My First Post");
  