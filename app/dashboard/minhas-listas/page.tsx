import EventCard from "@/components/events/event-card";
import PageContainer from "@/components/layout/page-container";

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <EventCard />
      </div>
    </PageContainer>
  );
}
