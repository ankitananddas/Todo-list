from django import forms


class TimeInput(forms.TimeInput):
    input_type = 'time'


class ExampleForm(forms.Form):
    my_time_field = forms.TimeField(widget=TimeInput)


class
