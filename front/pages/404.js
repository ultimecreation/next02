import Layout from "../components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Layout>
        <Link href="/">
          <a class="btn btn-secondary btn-sm my-3"> &lt; Back to home</a>
        </Link>
        <h1 class="my-5 text-center">Page Not Found</h1>
      </Layout>
    </div>
  );
}
