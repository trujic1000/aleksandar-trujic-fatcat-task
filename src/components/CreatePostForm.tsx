import { z } from 'zod';

import { usePosts } from '@homework-task/hooks/usePosts';

import { CreateForm } from './CreateForm';
import { Input } from './Input';
import { TextArea } from './TextArea';

const validationSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(50, 'Title must be less than 50 characters'),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(200, 'Body must be less than 200 characters'),
});

export const CreatePostForm = () => {
    const { mutation: postDataMutation } = usePosts();

    return (
        <CreateForm
            validationSchema={validationSchema}
            useMutation={postDataMutation}
            successMessage="Post created successfully!"
            renderForm={({ register, formState: { errors } }) => (
                <>
                    <Input
                        id="title"
                        label="Title"
                        placeholder="Input post title..."
                        required
                        error={errors.title}
                        {...register('title')}
                    />
                    <TextArea
                        id="body"
                        label="Body"
                        placeholder="Lorem ipsum..."
                        required
                        error={errors.body}
                        {...register('body')}
                    />
                </>
            )}
        />
    );
};
