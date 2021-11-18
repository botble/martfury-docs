# Release Notes

- [Martfury 1.15](#version_1_15)
- [Martfury 1.14](#version_1_14)
- [Martfury 1.13](#version_1_13)
- [Martfury 1.12](#version_1_12)
- [Martfury 1.11](#version_1_11)
- [Martfury 1.10](#version_1_10)
- [Martfury 1.9](#version_1_9)
- [Martfury 1.8](#version_1_8)
- [Martfury 1.7](#version_1_7)
- [Martfury 1.6](#version_1_6)
- [Martfury 1.5](#version_1_5)
- [Martfury 1.4](#version_1_4)
- [Martfury 1.3](#version_1_3)
- [Martfury 1.2](#version_1_2)
- [Martfury 1.1](#version_1_1)
- [Martfury 1.0](#version_1_0)

<a name="version_1_15"></a>
## Martfury 1.15
### Nov 18, 2021
- Added language switcher in vendor dashboard.
- Added some events (order confirmed, order completed, payment completed, order cancelled…) in source code (for developers).
- Added FAQ to product detail page
- Show confirmation box when delete user address.
- Fix bullets list style in the editor.
- Fix admin bar setting.
- Fix product categories shortcode.
- Fix Stripe payment gateway in non-decimal currencies.
- Fix UI issue with select2 fields.
- Fix UI checkout page.
- Fix update customer’s avatar.
- Fix update shipping status.
- Fix some small issues when upgrading to Bootstrap 5.
- Improve UI for vendor dashboard.
- Improve reviews: display review images in the admin panel.
- Improve multi-language.
- Improve plugin Language & Language Advanced.
- Improve product categories.
- Improve shortcode.
- Improve search.
- Improve Razorpay.
- Improve plugin Analytics.
- Improve core & UI.
- Improve RTL mode.
- Validate CSV/Excel file before importing products.
- Update to the latest Laravel version 8.72.0.
- Optimize queries performance.


<a name="version_1_14"></a>
## Martfury 1.14
### Oct 19, 2021
- Add multi-language support.
- Add product approval.
- Add option to enable/disable a vendor store.
- Add option to add/subtract vendor balance.
- Upgrade admin theme to Bootstrap 5.
- Add system updater. 1-click update to the latest version.
- Add BunnyCDN cloud storage.
- Improve PayPal & Razorpay. Display warning if the current currency isn't supported by PayPal / Razorpay.
- Improve invoice template.
- Fix checkout page, apply coupon.
- Fix bug admin email, login backgrounds.
- Fix missing translations.
- Make phone field at the checkout optional.
- Update to the latest Laravel version 8.64.0
- Improve multi-language.
- Improve RTL mode for admin & vendor dashboard.
- Improve UI & Editors.
- Improve cookie consent (Added minimal style).
- Improve core.
- Optimize queries performance.

<a name="version_1_13"></a>
## Martfury 1.13
### Sep 16, 2021
- Add vendor verification.
- Add product review images.
- Add weekly abandoned carts email notifications
- Add minimum order amount for COD.
- Fix revenue in vendor dashboard.
- Fix get products by category & breadcrumb.
- Fix layout when disabling review.
- Fix theme migration & issue when activating plugin Language.
- Fix admin email.
- Fix cache issue in media.
- Clear data when deleting customer.
- Improve product categories widgets.
- Improve product categories dropdown (allow adding custom image for icon).
- Improve invoice. Add setting to change font family for invoices.
- Improve payment gateways.
- Improve CKEditor.
- Improve theme custom CSS/JS.
- Improve allowed iframe types.
- Handle TokenMismatchException.
- Prevent error when missing watermark image.
- Update to the latest Laravel version 8.60.0
- Improve UI.
- Improve core.
- Optimize queries performance.

<a name="version_1_12"></a>
## Martfury 1.12
### Aug 23, 2021
- Fix social login.
- Fix Contact plugin with the new editor.
- Fix permission issues.
- Fix currency settings.
- Fix checkout recovery.
- Fix display product variant image on checkout or order detail page.
- Fix Mollie payment gateway (handle when customer cancel payment).
- Fix Razorpay (correct amount with shipping fee).
- Fix homepage slider on small screen.
- Fix apply coupon on cart page.
- Fix product compare (allow to hide some unwanted product attributes).
- Add Bulk Import Products from CSV/Excel.
- Add search products by brand.
- Add order delivery notes.
- Add filter products by category in Admin -> Ecommerce -> Products.
- Add more social links in Theme options.
- Improve eCommerce reports page.
- Improve discount & create order (make it translatable).
- Improve shortcode. Make it easier to modify added shortcodes.
- Improve editor & clean XSS.
- Update email templates.
- Update to the latest Laravel version 8.55.0
- Improve core.
- Optimize queries performance.

<a name="version_1_11"></a>
## Martfury 1.11
### Jul 27, 2021
- Update CKEditor and TinyMCE to the latest version (version 5).
- Update media: Add a button to download media files from URL.
- Able to add multiple admin emails in Admin -> Settings -> General.
- Big change on blog categories & product categories. Hierarchical tree structured category https://prnt.sc/1g4ht0w.
- Prevent clear cart after logging out.
- Add PayPal & Stripe refund.
- Improve currencies setting. Prevent error when deleting the default currency.
- Improve email templates.
- Ajax update cart.
- Fix missing translations.
- Fix shipping fees for stores.

<a name="version_1_10"></a>
## Martfury 1.10
### Jul 13, 2021
- Release Marketplace plugin.
- Add an option to disable guest checkout.
- Add minimum order amount setting.
- Add Wasabi cloud storage support.
- Disable auto-generate product SKU.
- Fix product permalinks.
- Fix order address.
- Fix Razorpay payment gateway.
- Improve checkout process.
- Remove unused translations.
- Allow to config the default placeholder image.
- Improve media, translations & backup.
- Improve UI.
- Optimize queries.
- Refactor code & improve performance.
- Fix some bugs on PHP 8.

<a name="version_1_9"></a>
## Martfury 1.9
### Jun 16, 2021
- Added RTL support for the admin panel.
- Added bulk deletes for product variations & optimize create all variations.
- Improve product swatches: disable not available options.
- Display out of stock badge.
- Fix payment gateways.
- Fix product's quantity & stock status
- Fix shipping when only 1 country available.
- Fix discount.
- Fix gallery shortcode.
- Fix some errors on PHP 8.
- Improve media, fix some errors with SVG.
- Improve UI.
- Optimize queries.
- Refactor code & improve performance.

<a name="version_1_8"></a>
## Martfury 1.8
### May 10, 2021
- Add product labels.
- Change product filters to use Ajax.
- Improve theme UI.
- Fix change user's password.
- Fix bug customer address when zip code empty
- Remove unused services in Google Client API services to reduce app size.
- Update theme options & handle errors when saving custom CSS.
- Optimize queries.
- Refactor code & improve performance.

<a name="version_1_7"></a>
## Martfury 1.7
### Apr 12, 2021
- Update cart by Ajax.
- Add product's description in the compare page.
- Fix tax on product variations.
- Improve UI & allow modify email templates for verify account email and reset password.
- Improve filter products, allow search by tags.
- Add option to turn off automatic URL translation into Latin.
- Add command to rename the theme to the new name.
- Add option to force URL & schema.
- Improve email templates.
- Refactor code & optimize performance.

<a name="version_1_6"></a>
## Martfury 1.6
### Mar 15, 2021
- Added RTL support.
- Improve SSLCommerz payment gateway.
- Improve currency and display product quantity in the product listing.
- Update dashboard widgets for eCommerce purposes.
- Update email templates.
- Fix cart image when product variation has no image.
- Fix bug create order from the admin panel.
- Fix bug Serialization of 'GdImage' is not allowed.
- Fix Mollie payment when amount > 1000.
- Fix permission issues.
- Prevent process order many times.

<a name="version_1_5"></a>
## Martfury 1.5
### Mar 01, 2021
- Added SSLCommerz payment gateway.
- New option to add custom JS in Admin -> Appearance -> Custom JS.
- Added setting in Admin -> Settings -> General to change login screen backgrounds.
- Change product SKU when changing product attribute.
- Improve dashboard widgets.
- Improve payment gateways.
- Improve order tracking.
- Fix permission issue on Contact plugin.
- Fix invoice with Euro sign.
- Fix flash messages.
- Fix apply coupon in checkout recovery.

<a name="version_1_4"></a>
## Martfury 1.4
### Feb 18, 2021
- Add option to display product price including taxes.
- Add option to set available countries. Check Admin -> Ecommerce -> Settings.
- Update list countries. Add Kosovo.
- Improve product reviews
- Improve page SEO meta.
- Fix calculate shipping fee.
- Fix Custom CSS.
- Fix bug Editor on PHP 8.
- Refactor code & improve queries for better performance.

<a name="version_1_3"></a>
## Martfury 1.3
### Jan 20, 2021
- Upgrade to Laravel 8.
- Improve permalinks.
- Allow deleting products after it's purchased by customers.
- Prevent error when deleting a product that is added into the cart.
- Prevent access to Ajax URLs directly.
- Optimize checkout speed.
- Fix bug when updating flash sales.
- Fix E-commerce settings and add settings for thousands and decimal separators.
- Fix the order's amount when creating from the admin panel.
- Fix permission issue.

<a name="version_1_2"></a>
## Martfury 1.2
### Jan 20, 2021
- Add ZIP code into customer address, able to enable/disable in settings https://prnt.sc/x3zolu
- Change product's images when selecting product variations.
- Improve checkout speed.
- Update theme translations.
- Fix search blog.
- Fix shortcode `product-category-products`.
- Fix bugs update order's note, price format and order's weight.
- Fix discount/coupon section in the cart page.
- Fix discount amount when removing products from the cart.
- Fix default product price and sort product attributes.

<a name="version_1_1"></a>
## Martfury 1.1
### Jan 11, 2021
- Add Mollie payment gateway.
- Integrate social logins: Facebook, Google, Github, Linkedin.
- Improve queries performance.
- Fix UI.
- Fix some small bugs.

<a name="version_1_0"></a>
## Martfury 1.0
### Jan 05, 2021
- Initial release version 1.0
