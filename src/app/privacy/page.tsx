import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Notice } from "@/components/sections/Notice";

export const metadata = pageMetadata({
  title: "Privacy Policy (placeholder)",
  description: "Privacy policy placeholder for the Evolution PE website, pending legal review.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Placeholder, pending legal review." />
      <Section narrow>
        <Notice title="This is a placeholder, not a legal document">
          It describes how this website works today so visitors aren't surprised. It has not been reviewed by an attorney and must be replaced before the site is promoted widely or any accounts, payments, or student features are added.
        </Notice>
        <div className="prose-evo mt-8">
          <h2>What this website does today</h2>
          <ul>
            <li>It does not have accounts or logins.</li>
            <li>It does not process payments or collect payment information.</li>
            <li>It is not designed to collect student data, and we ask visitors not to enter it in any form.</li>
            <li>It does not use advertising or analytics tools. [Confirm before launch and update if this changes.]</li>
          </ul>
          <h2>Information you choose to send</h2>
          <p>If you join the email list or use the contact form, we receive the information you type, such as your email address, your role, your interests, and your message. [Name the form and email providers here, and state how long information is kept.]</p>
          <h2>Children's privacy</h2>
          <p>This website is intended for teachers, parents, and other adults. [Legal review needed for COPPA and any state student-privacy laws before any student-facing features connect to this site.]</p>
          <h2>Bench Boost and other tools</h2>
          <p>Bench Boost runs separately at learn.evolutionpe.com and may have its own privacy practices. [Link to that policy when it exists.]</p>
          <h2>Hosting</h2>
          <p>This website is hosted by a third-party provider. [Name the host and describe any server logs.]</p>
          <h2>Your choices and contact</h2>
          <p>[Describe how to unsubscribe, how to request deletion, and how to contact us.]</p>
        </div>
      </Section>
    </>
  );
}
