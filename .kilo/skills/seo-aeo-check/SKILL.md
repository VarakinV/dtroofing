---
name: seo-aeo-check
description: SEO and AEO compliance checklist for dtroofing.org. Use when auditing any page for search engine and AI search optimization, meta tags, structured data, image alt text, or content quality.
---

# SEO & AEO Compliance Checklist for dtroofing.org

> **Domain:** https://dtroofing.org
> **Business:** D.T. Roofing Ltd. — roofing company in Brandon, MB
> **Old WordPress title:** "D.T. Roofing Ltd. - A roofing company in Brandon MB"
> **Core services:** Shingle roofs, metal roofs, roof repairs, siding, eavestrough, insurance/hail claims

---

## 1. Page Title (`<title>`) Requirements

### General Rules
- **Max length:** 60 characters (including spaces)
- **Must include:** Company name ("D.T. Roofing"), service keyword(s), and city/region where applicable
- **Format:** Primary keyword first, pipe-separated sections, brand at end
- **Each page must have a unique title** — no duplicate titles across pages
- **Must NOT be keyword-stuffed** — read naturally

### Home Page Title
The home page title is the most critical. It must reflect the business's core identity:

**Required elements:** Company name, "Brandon", primary service keywords (roofing, shingle roofs, metal roofs, repairs)

**Recommended title options (under 60 chars):**
- `D.T. Roofing | Shingle & Metal Roofs, Repairs | Brandon MB` (56 chars)
- `Roofing Company Brandon MB | Shingle & Metal | D.T. Roofing` (59 chars)
- `D.T. Roofing Ltd. | Roofing Company Brandon MB` (46 chars)

**Current title to audit:** `"Roofing Brandon MB | Metal Roofs & Repairs | D.T Roofing"` (56 chars)
- **Issue:** Missing "shingle" keyword explicitly
- **Action:** Update to include shingle roofs alongside metal roofs

### Service Pages Title Pattern
| Page | Current Title | Length | Status |
|------|---------------|--------|--------|
| `/metal-roofing` | Metal Roofing Brandon MB \| Standing Seam & Metal Shingles \| D.T Roofing | 68 | **OVER — shorten** |
| `/shingle-roofing` | Shingle Roofing & Re-roofs Brandon MB \| D.T Roofing | 53 | OK |
| `/cedar-roofing` | Cedar Roofing Brandon MB \| Shakes & Shingles \| D.T Roofing | 60 | OK |
| `/roof-repair` | Roof Repair Brandon MB \| Fast, Honest Fixes \| D.T Roofing | 59 | OK |
| `/siding-eavestrough` | Siding, Eavestrough & Soffit Brandon MB \| D.T Roofing | 53 | OK |
| `/insurance-claims` | Roof Insurance & Hail Claims Brandon MB \| D.T Roofing | 54 | OK |
| `/inspections` | Roof Inspections Brandon MB \| HAAG Certified \| D.T Roofing | 59 | OK |

**Metal roofing title (68 chars) must be shortened**, e.g.:
- `Metal Roofing Brandon MB | Standing Seam | D.T Roofing` (54 chars)

### Location Pages Title Pattern
Current: `Roofing ${preposition} ${townName}, MB | Metal, Re-roofs & Repairs | D.T Roofing`

**PROBLEM: These titles exceed 60 characters for most towns.**

Example: `"Roofing in Neepawa, MB | Metal, Re-roofs & Repairs | D.T Roofing"` = 64 chars

**Fix:** Shorten to fit 60 chars while keeping location + keywords.
**Recommended pattern:** `Roofing ${townName} MB | Metal & Shingle | D.T Roofing`

Examples:
- `Roofing Neepawa MB | Metal & Shingle | D.T Roofing` (50 chars)
- `Roofing Virden MB | Metal & Shingle | D.T Roofing` (49 chars)

### Other Pages Title Pattern
| Page | Current Title | Length | Status |
|------|---------------|--------|--------|
| `/about` | About D.T Roofing \| Brandon MB Roofers \| Third Generation | 58 | OK |
| `/contact` | Contact D.T Roofing \| Brandon MB \| 204-726-1045 | 49 | OK |
| `/faq` | Roofing FAQ \| D.T Roofing Brandon, MB | 39 | OK |
| `/gallery` | Gallery \| Roofs We've Done \| D.T Roofing Brandon | 50 | OK |
| `/reviews` | Reviews \| D.T Roofing Brandon, MB | 34 | OK |
| `/careers` | Roofing Jobs & Careers in Brandon, MB \| D.T Roofing | 51 | OK |
| `/guides` | Roofing Guides \| Brandon & the Westman Region \| D.T Roofing | 59 | OK |
| `/guide-roof-repair-vs-replacement` | Roof Repair in Brandon: When to Fix and When to Replace \| D.T Roofing | 71 | **OVER — shorten** |
| `/guide-roof-replacement-costs-materials` | (check content) | check | Audit |
| `/guide-siding-installation-repair-brandon` | (check content) | check | Audit |
| `/guide-eavestrough-brandon` | (check content) | check | Audit |

**Guide titles to audit and shorten if over 60 chars.**
Example fix: `Roof Repair vs Replacement | D.T Roofing Brandon` (49 chars)

---

## 2. Meta Description Requirements

### General Rules
- **Max length:** 160 characters (including spaces)
- **Must be unique per page** — never duplicate across pages
- **Must include a call-to-action** where appropriate (e.g., "Free quotes", "Call today")
- **Must include primary keywords naturally**
- **Must accurately describe the page content**

### Home Page Meta Description
**Current:** `"Brandon's third-generation roofers. Metal roofs, re-roofs, repairs and hail & insurance claims across the Westman region. Free quotes, fully insured."` (152 chars)

**Audit checklist:**
- [ ] Under 160 chars
- [ ] Includes "Brandon"
- [ ] Mentions roofing services (shingle, metal, repairs)
- [ ] Includes trust signals (insured, free quotes)
- [ ] **Should also mention "shingle roofs" explicitly** alongside metal

**Suggested:** `"D.T. Roofing — Brandon's third-generation roofing company. Shingle roofs, metal roofs, repairs & insurance claims across the Westman region. Free quotes, fully insured."` (168 chars — too long)

**Revised:** `"Brandon's third-generation roofing company. Shingle roofs, metal roofs, repairs & hail claims in the Westman region. Free quotes, fully insured."` (147 chars)

### Service Pages — Verify Each Has:
- [ ] Under 160 characters
- [ ] Service name + location
- [ ] Brand differentiators (third-generation, insured, etc.)
- [ ] CTA if space (Free quotes)

### Location Pages — Verify Each Has:
- [ ] Under 160 characters
- [ ] Town name + "MB" or "Manitoba"
- [ ] Core services (metal, shingle, repairs, claims)
- [ ] "Free quotes" or similar CTA

---

## 3. JSON-LD Structured Data (Schema.org)

### Required Schemas Per Page Type

#### Home Page (`/`)
Must include ALL of:

1. **RoofingContractor** (LocalBusiness subtype) — already present, verify:
   ```
   Required fields:
   @type: "RoofingContractor"
   name: "D.T. Roofing Ltd."
   telephone: "+1-204-726-1045"
   email: "info@dtroofing.info"
   address: PostalAddress (550 Highland Ave, Brandon, MB, R7C 1A9, CA)
   geo: GeoCoordinates
   url: "https://dtroofing.org/"
   openingHoursSpecification
   areaServed (all 17 cities)
   sameAs (Facebook, Google Maps)
   logo: ImageObject
   priceRange: "$$"
   ```

2. **MISSING — AggregateRating** on the LocalBusiness:
   ```json
   "aggregateRating": {
     "@type": "AggregateRating",
     "ratingValue": "4.8",
     "reviewCount": "XX",
     "bestRating": "5"
   }
   ```
   Use current Google review count.

3. **MISSING — WebSite schema** (enables sitelinks search box):
   ```json
   {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "D.T. Roofing Ltd.",
     "url": "https://dtroofing.org/",
     "potentialAction": {
       "@type": "SearchAction",
       "target": "https://dtroofing.org/?s={search_term_string}",
       "query-input": "required name=search_term_string"
     }
   }
   ```

4. **RECOMMENDED — Service schema** listing core services:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Service",
     "serviceType": "Roofing",
     "provider": { "@type": "RoofingContractor", "name": "D.T. Roofing Ltd." },
     "areaServed": { "@type": "AdministrativeArea", "name": "Westman region, Manitoba" },
     "hasOfferCatalog": {
       "@type": "OfferCatalog",
       "name": "Roofing Services",
       "itemListElement": [
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roofing" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shingle Roofing" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cedar Roofing" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding & Eavestrough" } },
         { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insurance Claims" } }
       ]
     }
   }
   ```

#### Service Pages (`/metal-roofing`, `/shingle-roofing`, `/cedar-roofing`, `/roof-repair`, `/siding-eavestrough`, `/insurance-claims`, `/inspections`)
Must include:

1. **Service schema** — already present, verify:
   ```
   @type: "Service"
   serviceType: descriptive string
   provider: RoofingContractor with name, phone, address
   areaServed: AdministrativeArea
   ```

2. **BreadcrumbList** — already present, verify:
   ```
   Home > [Service Name]
   ```

3. **RECOMMENDED — FAQPage schema** if the page contains FAQ-style Q&A content (many service pages have "questions we hear" sections)

#### Location Pages (`/roofing-*`)
Must include:

1. **RoofingContractor schema** with `areaServed` for that specific city — already present
2. **BreadcrumbList** — Home > Roofing [Town] — already present
3. **RECOMMENDED — LocalBusiness schema** should be extended to include services offered in that area

#### FAQ Page (`/faq`)
Must include:

1. **FAQPage schema** — already present, verify all Q&A pairs match the JSON-LD content exactly
2. **BreadcrumbList** — already present
3. **RECOMMENDED:** Add more questions to capture long-tail AI search queries (see Section 9)

#### Guide/Blog Pages (`/guide-*`)
Must include:

1. **Article schema** — already present, verify:
   ```
   headline, description, image, author, publisher,
   datePublished, dateModified, mainEntityOfPage
   ```

2. **BreadcrumbList** — already present

#### Other Pages (`/about`, `/contact`, `/gallery`, `/reviews`, `/careers`)
Must include:

1. **BreadcrumbList** — already present
2. **RECOMMENDED for `/about`:** Organization or LocalBusiness schema
3. **RECOMMENDED for `/reviews`:** AggregateRating schema pulling from Google

---

## 4. Image Alt Text Requirements

### General Rules
- **EVERY `<img>` tag must have an `alt` attribute**
- **Alt text must be descriptive and specific** — describe what the image shows
- **Include relevant keywords naturally** but do not keyword-stuff
- **Decorative images** should have `alt=""` and `aria-hidden="true"`
- **Logo images** should use company name as alt text
- **Length:** 5-125 characters, concise but descriptive

### Audit Checklist Per Page
- [ ] Hero/banner images — descriptive alt or `alt=""` if decorative background
- [ ] Service photos — describe the roofing work shown (e.g., "Standing seam metal roof installation in Brandon MB")
- [ ] Gallery images — describe project type, location, material
- [ ] Affiliation/certification logos — organization name (e.g., "HAAG Certified Inspector")
- [ ] Team/owner photos — person's name and role
- [ ] Map/location images — "D.T. Roofing location map, 550 Highland Ave Brandon MB"

### Current Issues Found
- Home page affiliation logos: `alt` attributes look correct — verify each matches the image
- Location page hero image: `alt={`A D.T Roofing roof near ${townName}, Manitoba`}` — GOOD, includes location
- Verify gallery images all have unique, descriptive alt texts

---

## 5. Open Graph & Social Meta Tags

### Every Page Must Have:
- [ ] `og:title` — matches page title (or slight variation for social)
- [ ] `og:description` — matches meta description
- [ ] `og:url` — matches canonical URL exactly
- [ ] `og:image` — at least one image, min 1200x630px recommended
- [ ] `og:type` — `website` for static pages, `article` for guides/blog
- [ ] `og:locale` — `en_CA` (set in layout.tsx)
- [ ] `og:site_name` — `D.T Roofing Ltd.` (set in layout.tsx)
- [ ] `twitter:card` — `summary_large_image` (set in layout.tsx)
- [ ] `twitter:title` — matches page title
- [ ] `twitter:description` — matches meta description
- [ ] `twitter:image` — matches OG image

### Audit Notes
- Most pages set these correctly
- Verify each page's OG image URL is accessible and returns a valid image
- OG images should ideally be unique per page or at least per section

---

## 6. Canonical URLs & Technical SEO

### Canonical URL Rules
- [ ] Every page has a `canonical` URL set
- [ ] Canonical URL uses `https://dtroofing.org/` (not `http://`)
- [ ] Canonical URL has trailing slash (matches `next.config.ts` `trailingSlash: true`)
- [ ] Canonical URL matches the `og:url`
- [ ] No duplicate canonicals or conflicting canonical signals

### Sitemap
- [ ] `sitemap.xml` generated from `sitemap.ts` — already present
- [ ] All pages listed in sitemap
- [ ] Priorities make sense (home=1, services=0.8-0.9, locations=0.7, guides=0.7)
- [ ] `robots.txt` references sitemap — already configured

### Robots
- [ ] `robots.ts` allows all crawlers — already configured
- [ ] Add AI crawler directives if needed (see Section 10)

### hreflang
- [ ] Site is `en_CA` only — `<html lang="en-CA">` is set correctly in layout

### Other Technical Checks
- [ ] No `noindex` on any public page
- [ ] 301 redirects from old WordPress URLs to new Next.js URLs (map all old URLs)
- [ ] No broken internal links
- [ ] All external links have `rel="noopener"` for `target="_blank"` links

---

## 7. Heading Structure (H1-H6)

### Rules
- **Exactly ONE `<h1>` per page** — verify every page has exactly one h1
- **H1 must include primary keyword** for that page
- **Heading hierarchy must be logical** — no skipping levels (h1 > h2 > h3)
- **H1 should match or closely relate to page title**
- **No duplicate H1 text across different pages** (except intentional branding)

### Audit Per Page
- [ ] Home H1: "We've Got You Covered." — **Note:** Creative but weak for SEO. Consider adding a visible `<h1>` that includes "roofing" and "Brandon"
- [ ] Service pages: Each has descriptive H1 — verify
- [ ] Location pages: "Roofing in [Town], Manitoba" — GOOD
- [ ] Other pages: Verify unique, keyword-rich H1s

---

## 8. Internal Linking

### Rules
- [ ] All service pages link to each other where contextually relevant
- [ ] Location pages link to service pages (already done in LocationPage component)
- [ ] Home links to all major service pages
- [ ] Footer links to all key pages
- [ ] Use descriptive anchor text (not "click here")
- [ ] Breadcrumb navigation on all inner pages — already implemented

---

## 9. AEO (Answer Engine Optimization) for AI Search

### Principles
AI search engines (Google SGE/AI Overviews, Bing Copilot, ChatGPT Search, Perplexity, etc.) prioritize:

1. **Clear, direct answers** to common questions
2. **Concise, factual content** in a structured format
3. **FAQ schema** with real Q&A content
4. **Entity recognition** — business name, location, services clearly stated
5. **Authoritative signals** (citations, certifications, years in business)
6. **Conversational, natural language** that matches how people ask questions

### AEO Requirements

#### FAQ Page — Expand Questions
Current FAQ has only 5 questions. Add more to capture AI-relevant long-tail queries:

**Additional questions to add:**
- "How much does a new roof cost in Brandon, MB?"
- "How long does a roof replacement take?"
- "What's the difference between shingle and metal roofing?"
- "Do you offer free roofing inspections?"
- "How do you handle hail damage claims in Manitoba?"
- "What roofing materials last longest in Manitoba winters?"
- "Are you a certified roofing contractor?"
- "What areas near Brandon do you serve?"
- "How do I book a roofing quote online?"
- "What warranty do you offer on roofing work?"

#### Content Structure for AEO
- [ ] Use **definition-style paragraphs** that directly answer questions (AI engines pull these)
- [ ] Include **comparison tables** (shingle vs. metal, cost estimates)
- [ ] Use **numbered steps** for processes (e.g., "How the insurance claim process works")
- [ ] Add **"At a Glance" summaries** at top of service pages (AI engines love these)
- [ ] Ensure **key facts** (phone, address, services, service area) are in plain text, not just images

#### Speakable Schema (Optional but Recommended)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-lead", ".section-title"]
  }
}
```

---

## 10. AI Crawler Directives

### robots.txt — Add AI-Specific Rules
Consider adding directives for AI crawlers:

```robots.txt
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Bytespider
Allow: /
```

Update `app/robots.ts` to include these if the business wants to be discoverable by AI search engines (recommended for local businesses).

---

## 11. Root Layout Issues

### Current Issues in `layout.tsx`
- [ ] **MISSING:** `title` in metadata — no default title or title template
- [ ] **RECOMMENDED:** Add a `title.template` for consistent branding:
  ```ts
  title: {
    default: "D.T. Roofing Ltd. | Roofing Company Brandon MB",
    template: "%s | D.T. Roofing"
  }
  ```
  This ensures any page without an explicit title still has one, and pages using the template get consistent brand suffix.

---

## 12. Page-by-Page Audit Checklist

When auditing any page, verify ALL of the following:

```
□ Title tag exists and is unique
□ Title is under 60 characters
□ Title includes primary keyword for the page
□ Title includes business name or city where applicable
□ Meta description exists and is unique
□ Meta description is under 160 characters
□ Meta description includes a call-to-action
□ Canonical URL is set and correct (https, trailing slash)
□ OG title, description, url, image all present
□ Twitter card title, description, image all present
□ Exactly one H1 per page
□ Heading hierarchy is valid (no skipped levels)
□ JSON-LD structured data is present (type-appropriate)
□ BreadcrumbList schema present on inner pages
□ All <img> tags have descriptive alt text
□ All <img> tags have width/height attributes
□ All external links have rel="noopener"
□ All internal links use descriptive anchor text
□ No broken links
□ Page loads without console errors
□ Content is unique (not duplicated from other pages)
□ Phone number visible on page (204-726-1045)
□ Business name mentioned in body text
□ City/location mentioned in body text (where applicable)
□ FAQ schema present if page has Q&A content
□ Service schema present if page describes a service
□ Page is listed in sitemap.xml
□ Page is not blocked by robots.txt
```

---

## 13. Quick Reference: Page URL Map

| URL | Page Type | Priority |
|-----|-----------|----------|
| `/` | Home | Critical |
| `/metal-roofing` | Service | High |
| `/shingle-roofing` | Service | High |
| `/cedar-roofing` | Service | High |
| `/roof-repair` | Service | High |
| `/siding-eavestrough` | Service | Medium |
| `/insurance-claims` | Service | High |
| `/inspections` | Service | Medium |
| `/roofing-birtle` | Location | Medium |
| `/roofing-boissevain` | Location | Medium |
| `/roofing-carberry` | Location | Medium |
| `/roofing-clear-lake` | Location | Medium |
| `/roofing-deloraine` | Location | Medium |
| `/roofing-hamiota` | Location | Medium |
| `/roofing-killarney` | Location | Medium |
| `/roofing-melita` | Location | Medium |
| `/roofing-minnedosa` | Location | Medium |
| `/roofing-neepawa` | Location | Medium |
| `/roofing-rapid-city` | Location | Medium |
| `/roofing-reston` | Location | Medium |
| `/roofing-rivers` | Location | Medium |
| `/roofing-russell` | Location | Medium |
| `/roofing-souris` | Location | Medium |
| `/roofing-virden` | Location | Medium |
| `/roofing-wawanesa` | Location | Medium |
| `/about` | About | Medium |
| `/contact` | Contact | Medium |
| `/faq` | FAQ | High |
| `/gallery` | Gallery | Low |
| `/guides` | Guides Index | Medium |
| `/guide-eavestrough-brandon` | Guide | Medium |
| `/guide-roof-repair-vs-replacement` | Guide | Medium |
| `/guide-roof-replacement-costs-materials` | Guide | Medium |
| `/guide-siding-installation-repair-brandon` | Guide | Medium |
| `/reviews` | Reviews | Medium |
| `/careers` | Careers | Low |

---

## 14. Known Issues Summary (Action Items)

1. **CRITICAL:** Home page title missing "shingle" keyword — update
2. **CRITICAL:** `layout.tsx` missing `title` metadata — add title template
3. **HIGH:** Location page titles exceed 60 chars — shorten template
4. **HIGH:** Guide page titles may exceed 60 chars — audit and shorten
5. **HIGH:** Missing AggregateRating schema on home page
6. **HIGH:** Missing WebSite schema on home page
7. **MEDIUM:** Add more FAQ questions for AEO coverage
8. **MEDIUM:** Add Service schema with OfferCatalog on home page
9. **MEDIUM:** Add AI crawler directives to robots.ts
10. **MEDIUM:** Verify all gallery images have descriptive alt text
11. **LOW:** Add Speakable schema to key pages
12. **LOW:** Add FAQPage schema to service pages that contain Q&A content
