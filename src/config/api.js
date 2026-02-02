// src/config/api.js
export const API_URL = 'https://script.google.com/macros/s/AKfycbxE6FDev7uyMI98X2UcwjP-TzePNMM40WxXI_wwaav5C6PHGlk1yeSKxCikH1cstLQJ/exec'

export const IMGBB_KEY = 'b202a4bdc79bf1dc72f6f6ded6b74501'

// Helper functions (optional)
export async function fetchAPI(action, options = {}) {
  const res = await fetch(`${API_URL}?action=${action}`, options)
  return res.json()
}

export async function postAPI(data) {
  return fetch(API_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}