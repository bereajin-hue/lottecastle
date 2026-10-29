'use client'

import Image, { type ImageProps } from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Props = ImageProps & { placeholderClassName?: string }

/** 이미지 파일이 아직 배치되지 않았을 때 placeholder 박스로 대체 */
export default function SafeImage({ placeholderClassName = 'bg-gray-800', className, alt, ...props }: Props) {
  const [failed, setFailed] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  // 정적 HTML에서 하이드레이션 전에 로드 실패한 경우 onError가 누락되므로 직접 확인
  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`img-placeholder ${placeholderClassName} ${className ?? ''}`}
      >
        {String(props.src).split('/').pop()}
      </div>
    )
  }

  return <Image {...props} ref={ref} alt={alt} className={className} onError={() => setFailed(true)} />
}
