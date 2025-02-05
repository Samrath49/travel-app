import type { Database } from "~/types/supabase";

export const useItinerary = () => {
  const supabase = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  const createItinerary = async (tripPlan: any) => {
    if (!user.value) throw new Error("User not authenticated");

    const { data, error } = await supabase
      .from("itineraries")
      .insert({
        user_id: user.value.id,
        trip_plan: tripPlan,
        location: tripPlan?.location,
        start_date: new Date(tripPlan?.dates?.start || tripPlan?.start_date).toISOString(),
        end_date: new Date(tripPlan?.dates?.end || tripPlan?.end_date).toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  };

  const getItineraries = async () => {
    if (!user.value) throw new Error("User not authenticated");

    const { data, error } = await supabase
      .from("itineraries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  };

  const getItinerary = async (id: string) => {
    if (!user.value) throw new Error("User not authenticated");

    const { data, error } = await supabase
      .from("itineraries")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  };

  const deleteItinerary = async (id: string) => {
    if (!user.value) throw new Error("User not authenticated");

    const { error } = await supabase.from("itineraries").delete().eq("id", id);

    if (error) throw error;
  };

  return {
    createItinerary,
    getItineraries,
    getItinerary,
    deleteItinerary,
  };
};
