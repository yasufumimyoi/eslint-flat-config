import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

// メタデータの定義（App Router）
export const metadata: Metadata = {
  title: 'Fixed Example',
};

export default function NextjsFixedExample() {
  return (
    <div>
      {/* Linkコンポーネントを使用 */}
      <Link href="/about">About Page</Link>

      {/* Imageコンポーネントを使用 */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
      />

      {/* Scriptコンポーネントを使用（非同期） */}
      <Script
        src="https://example.com/script.js"
        strategy="lazyOnload"
      />

      {/* 正しいHTML属性名を使用 */}
      <div crossOrigin="anonymous">Test</div>
    </div>
  )
} 