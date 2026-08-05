import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/get-keam-cutoffs.php': 'http://localhost',
//       '/send-enquiry.php': 'http://localhost',
//     },
//   },
// })