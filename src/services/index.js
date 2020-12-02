import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

// POST
const postNewsBlog = (data) => Post("posts", false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

// PUT
const putNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);

const API = {
  getNewsBlog,
  getComments,
  postNewsBlog,
  putNewsBlog,
  deleteNewsBlog,
};

export default API;
