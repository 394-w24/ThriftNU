// Profile.js
import React from "react";
import "./Profile.css";

const Profile = ({ user, textbookPosts }) => {
  return (
    <div className="profile">
      <h2>
        <span className="icon">📘</span>
        {user.name}
      </h2>
      <h3>Class Year: {user.classYear}</h3>

      {Array.isArray(textbookPosts) ? (
        textbookPosts.map((post) => (
          <div key={post.id} className="textbook-post">
            <p>Book Title: {post.title}</p>
            <p>Author: {post.author}</p>
            {/* Add other details as needed */}
          </div>
        ))
      ) : (
        <p>No textbook posts available.</p>
      )}
    </div>
  );
};

export default Profile;
