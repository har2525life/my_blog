import React from "react";
import Image from "next/image"

const blogs = (
  <div className="border">
    <div>
        <Image src="/images/test_image.jpg" width={500} height={500} alt="test" />
    </div>
    <div className="p-4">
      <p className="">2023/07/27</p>
      <h1 className="mt-2 text-2xl">LambdaでTypescriptを使用する方法</h1>
      <ul className="flex mt-4">
        <li className="border p-2 me-2">AWS</li>
        <li className="border p-2 me-2">AWS</li>
      </ul>
    </div>
  </div>
);

const blogList = [blogs, blogs, blogs]

const BlogPage = () => {
  return (
    <div className="w-[960px] mx-auto">
      <div>BlogPage</div>
      <input
        type="text"
        placeholder="検索"
        className="w-full border border-black"
      />
      <h1 className="text-2xl">カテゴリー</h1>
      <div className="grid grid-cols-6 gap-5">
        <div className="border">
          <h1 className="text-center h-[64px] ">AWS</h1>
        </div>
        <div className="border">
          <h1>AWS</h1>
        </div>
        <div className="border">
          <h1>AWS</h1>
        </div>
        <div className="border">
          <h1>AWS</h1>
        </div>
        <div className="border">
          <h1>AWS</h1>
        </div>
        <div className="border">
          <h1>AWS</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8">
        {
            blogList.map((blog) => blog)
        }
      </div>
    </div>
  );
};

export default BlogPage;
