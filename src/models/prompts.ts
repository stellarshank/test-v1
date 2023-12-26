import {Schema, model, InferSchemaType} from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    }
});

type PromptType = InferSchemaType<typeof PromptSchema>

const Prompt = model<PromptType>("Prompt", PromptSchema);

export default Prompt;