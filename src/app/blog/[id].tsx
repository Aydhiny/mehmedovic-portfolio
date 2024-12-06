import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post Title</h1>
      <p>Post Content</p>
    </div>
  );
};

export default BlogPost;
