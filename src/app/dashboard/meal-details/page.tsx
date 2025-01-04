import MealDetails from "./MealDetails";

export default function Page({ searchParams }: { searchParams: { breakfast?: string } }) {
  return <MealDetails breakfast={searchParams.breakfast} />;
}
