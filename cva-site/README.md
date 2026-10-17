# কমার্স ভিশন একাডেমি — লাইভ এডিটযোগ্য ওয়েবসাইট

- পাবলিক সাইট: `/`
- এডমিন এডিটর: `/admin.html` (পাসওয়ার্ড Netlify-র ADMIN_PASSWORD থেকে)

## Netlify-তে চালু করার ধাপ
1. এই ফোল্ডারের সব ফাইল (public, netlify, netlify.toml, package.json) একটা GitHub রিপোজিটরিতে আপলোড করুন।
2. Netlify → Add new site → Import from Git → ওই রিপোজিটরি বেছে নিন (Build সেটিং অটো পাবে)।
3. (ঐচ্ছিক) Site configuration → Environment variables → ADMIN_PASSWORD দিলে সেই পাসওয়ার্ড চলবে; না দিলে ডিফল্ট পাসওয়ার্ড 507242 চলবে। রিপোজিটরি অবশ্যই Private রাখুন।
4. Deploys → Trigger deploy (একবার আবার ডিপ্লয়)।
5. `আপনার-সাইট.netlify.app/admin.html` এ গিয়ে পাসওয়ার্ড দিয়ে ঢুকুন, এডিট করে "সেভ ও লাইভ করুন" চাপুন।
