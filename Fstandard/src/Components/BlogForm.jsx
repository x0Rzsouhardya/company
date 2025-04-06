import React, { useState } from 'react';
import axios from 'axios';
import "../style/BlogForm.css"

function BlogForm({ refresh }) {
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    setForm(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', form.title);
    data.append('content', form.content);
    data.append('author', form.author);
    if (form.image) {
      data.append('image', form.image);
    }

    await axios.post('http://localhost:5007/api/blogs', data);
    setForm({ title: '', content: '', author: '', image: null });
    refresh();
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
  <input
    type="text"
    name="title"
    value={form.title}
    onChange={handleChange}
    placeholder="Title"
    required
  />
  <input
    type="text"
    name="author"
    value={form.author}
    onChange={handleChange}
    placeholder="Author"
    required
  />
  <textarea
    name="content"
    value={form.content}
    onChange={handleChange}
    placeholder="Content"
    required
  />
  <input
    type="file"
    onChange={handleImage}
  />
  <button type="submit">Post Blog</button>
</form>

  );
}

export default BlogForm;
