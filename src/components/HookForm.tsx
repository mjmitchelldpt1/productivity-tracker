import { useForm } from "react-hook-form";

type TFormInput = {
  id?: number;
  topic: string;
  rating: number;
  achievement: string;
  struggle: string;
  journal: string;
  plan: string;
};

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>({
    defaultValues: {
      topic: "",
      rating: 5,
      achievement: "",
      struggle: "",
      journal: "",
      plan: "",
    },
  });
  const onSubmit = (data: TFormInput) => console.log(data);
  return (
    <div className="flex flex-col px-2 m-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Topic:</label>
        <div className="mb-4">
          <input
            {...register("topic", {
              required: true,
              minLength: 1,
            })}
          />
          {errors.topic ? (
            <p className="form-error">Topic is required</p>
          ) : null}
        </div>
        <div className="mb-4">
          <label>Rating:</label>
          <input
            type="number"
            {...register("rating", {
              required: "true",
              min: 0,
              max: 10,
            })}
          />
          {errors.rating?.type === "required" ? (
            <p className="form-error" role="alert">
              Choose from 0-10
            </p>
          ) : null}
          {errors.rating?.type === "min" ? (
            <p className="form-error" role="alert">
              Choose from 0-10
            </p>
          ) : null}
          {errors.rating?.type === "max" ? (
            <p className="form-error" role="alert">
              Choose from 0-10
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          {" "}
          <label>Achievement:</label>
          <input
            type="textarea"
            {...register("achievement", { required: true, minLength: 1 })}
          />
          {errors.achievement?.type === "required" ? (
            <p className="form-error" role="alert">
              Share your success!
            </p>
          ) : null}
          <label>Struggle:</label>
          <input
            type="textarea"
            {...register("struggle", { required: true, minLength: 1 })}
          />
          {errors.struggle?.type === "required" ? (
            <p className="form-error" role="alert">
              Share your struggles!
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label>Journal:</label>
          <input
            type="textarea"
            {...register("journal", { required: true, minLength: 1 })}
          />
          {errors.journal?.type === "required" ? (
            <p className="form-error">Elaborate your journey</p>
          ) : null}
        </div>
        <label>Plan:</label>
        <div className="mb-4">
          <input
            type="textarea"
            {...register("plan", { required: true, minLength: 1 })}
          />
          {errors.plan?.type === "required" ? (
            <p className="form-error" role="alert">
              Describe your next challenge
            </p>
          ) : null}
        </div>

        <div className="flex justify-end">
          <button type="submit" className="button-primary">
            Submit Entry
          </button>
        </div>
      </form>
    </div>
  );
}

export default HookForm;
