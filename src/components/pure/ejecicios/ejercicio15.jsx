import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//models
import { LEVELS } from "../../../models/level.enum";

const TaskFormik = () => {

    const defaultTask = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        completed: false,
    };

    const taskSchemas = Yup.object().shape(
        {
            name: Yup.string().required('name task is required'),
            description: Yup.string().required('description task is required')
        }
    )

    return (
        <div>
            <h4>Task Formik</h4>
            <Formik
                initialValues={defaultTask}
                validationSchema={taskSchemas}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors }) => (
                    <Form>
                        <label htmlFor="name">Task</label>
                        <Field
                            id="name"
                            name="name"
                            placeholder="Task Name"
                            type="text"
                        />

                        {/* Task Errors */}
                        {
                            errors.name && (
                                <ErrorMessage name="name" component="div" />
                            )
                        }
                        <label htmlFor="description">Task Description</label>
                        <Field id="description" name="description" placeholder="Task Description" type="text" />

                        {/* Task Description Errors */}
                        {
                            errors.description && (
                                <ErrorMessage name="description" component="div" />
                            )
                        }
                        <Field as="select" className="form-control form-control-lg" name="level">
                            <option className="normal-style" value={LEVELS.NORMAL}>Normal</option>
                            <option className="urgent-style" value={LEVELS.URGENT}>Urgent</option>
                            <option className="blocking-style" value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <button type="submit">Create your first task</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default TaskFormik;