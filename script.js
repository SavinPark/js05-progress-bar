;(function () {
  'use strict'

  let timerId

  const get = (target) => {
    return document.querySelector(target)
  }

  const $progressBar = get('.progress-bar')

  // 일정 주기마다 이벤트를 발생
  const throttle = (callback, time) => {
    if (timerId) return
    timerId = setTimeout(() => {
      callback()
      timerId = undefined
    }, time)
  }

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop // 스크롤바의 수직 위치
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight // 스크롤 길이 = 전체 - 보여지는 영역
    const scrollWidth = (scrollTop / height) * 100 // 현재 위치 백분율
    // console.log(scrollWidth);
    $progressBar.style.width = scrollWidth + '%'
  }

  window.addEventListener('scroll', () => {
    throttle(onScroll, 100) // 뚝뚝 끊기면서 증가
    // onScroll() // 부드럽게 증가
  })
})()
