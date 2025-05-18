// Next.jsのルール違反を含むコンポーネント
export default function NextjsErrorExample() {
  return (
    <div>
      {/* no-html-link-for-pages違反: Next.jsでは<Link>コンポーネントを使用すべき */}
      <a href="/about">About Page</a>

      {/* no-img-element違反: Next.jsでは<Image>コンポーネントを使用すべき */}
      <img src="/logo.png" alt="Logo" />

      {/* no-head-element違反: App Routerではheadタグではなくmetadataを使用すべき */}
      <head>
        <title>Error Example</title>
      </head>

      {/* no-sync-scripts違反: 同期的なscriptタグの使用 */}
      <script src="https://example.com/script.js"></script>

      {/* no-typos違反: コンポーネントのprops名のタイプミス */}
      <div crossorigin="anonymous">Test</div>
    </div>
  )
} 