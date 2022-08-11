import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().max(100).required(),
  description: yup.string().max(1000).required(),
  videoUrl: yup.string().url().required(),
  userId: yup.number(),
  publishedStatus: yup.boolean(),
});
