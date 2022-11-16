import BlogSecond from "@pages/blog/second";

const BlogFirst = () => {
  const handleClick = () => {
    alert("Blog 2");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>Blog First</div>
      <BlogSecond text="Blog Second" handleClick={handleClick} />
    </div>
  );
};

export default BlogFirst;
