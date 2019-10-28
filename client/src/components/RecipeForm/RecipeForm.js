import React from 'react';
import { Field } from 'redux-form';
import { Button, FormGroup, Label, Form } from 'reactstrap';
import fields from '../../_helpers/formFields';
import FormField from '../FormField/FormField';
import style from './RecipeForm.module.scss';

const RecipeForm = ({ onSubmit }) => (
  <div className={style.root}>
    <Form className={style.form} onSubmit={onSubmit}>
      {fields.map(({ name, placeholder, field }) => (
        <FormGroup key={name}>
          <Label for="title" className="h3">
            {name}
          </Label>
          <Field
            id={name}
            field={field}
            name={name}
            label={placeholder}
            component={FormField}
            className="form-control"
          />
        </FormGroup>
      ))}
      <Button type="submit" color="info" className={style.saveBtn} block>
        Save
      </Button>
    </Form>
  </div>
);

export default RecipeForm;
