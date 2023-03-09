import Link from 'next/link'

const PrivacyPolicy = () => {
    return (
        <div className="md:ml-96 md:mr-96 font-poppins my-3">
        {/* Make a small back button */}
        <div className="flex flex-row">
            <Link href="/">
                <p className="text-[#EFCB27] font-bold text-xl">Home</p>
            </Link>
            <p className="text-[#EFCB27] font-bold text-xl mx-2">/</p>
            <p className="text-[#EFCB27] font-bold text-xl">Privacy Policy</p>
        </div>
            <h1 className="font-bold">Privacy Policy</h1>
            <h2 className="font-bold">SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h2>
            <p className="mx-1 my-3">


When you browse our page, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.

Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.

            </p>
            <h2 className="font-bold">SECTION 2 – CONSENT</h2>
            <p className="mx-1 my-3">


How do you get my consent?

When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.

If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.

How do I withdraw my consent?
If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at contact@studrill.com


</p>
<h2 className="font-bold">SECTION 3 – DISCLOSURE</h2>

<p className="mx-1 my-3">We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.

</p>

<h2 className="font-bold">
SECTION 4 – THIRD-PARTY SERVICES
</h2>

<p className="mx-1 my-3">

In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.

Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.


</p>


<h2 className="font-bold">

SECTION 5 – SECURITY
</h2>
<p className="mx-1 my-3">

To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.


</p>
<h2 className="font-bold">
SECTION 6 – COOKIES
</h2>
<p className="mx-1 my-3">

Here is a list of cookies that we use. We’ve listed them here so that you can choose if you want to opt-out of cookies or not.

_session_id, unique token, sessional, Allows us to store information about your session (referrer, landing page, etc).
_visit, no data held, Persistent for 30 minutes from the last visit, Used by our website provider’s internal stats tracker to record the number of visits
_secure_session_id, unique token, sessional

</p>

<h2 className="font-bold">
SECTION 7 – AGE OF CONSENT
</h2>

<p className="mx-1 my-3">
By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
</p>

<h2 className="font-bold">
SECTION 8 – CHANGES TO THIS PRIVACY POLICY
</h2>

<p className="mx-1 my-3">

We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.

If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.

“By using our website, you (the visitor) agree to allow third parties to process your IP address, in order to determine your location for the purpose of currency conversion. You also agree to have that currency stored in a session cookie in your browser (a temporary cookie which gets automatically removed when you close your browser). We do this in order for the selected currency to remain selected and consistent when browsing our website so that the prices can convert to your (the visitor) local currency.”

</p>

<h2 className="font-bold">
QUESTIONS AND CONTACT INFORMATION
</h2>
<p className="mx-1 my-3">
If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at contact@studrill.com
            </p>
        </div>
    )
}

export default PrivacyPolicy