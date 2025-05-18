import { useState, useEffect } from 'react'

// 未使用の変数（warning）
const unusedVariable = 'unused'

// any型の使用（warning）
const someFunction = (param: any) => {
  console.log(param)
}

// Hooksルール違反（error）- 条件付きでのHooks使用
const ErrorExample = () => {
  const [count, setCount] = useState(0)

  if (count > 0) {
    // これはエラー: フックは条件分岐の中で呼び出せない
    useEffect(() => {
      console.log('This is wrong!')
    }, [])
  }

  // 依存配列の警告
  useEffect(() => {
    console.log(count)
    // countを依存配列に含めていない
  }, [])

  return (
    <div>
      <h1>Error Example</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default ErrorExample 