# SFDX  App

## Objectives

Create a Lightning App for doctors where they can enter periodic measures of their patient's weight and have insights on the trend as well as see some graphics of the progression during the last month.
Also, have a component integrated with the Salesforce One app so that information can be seen by a doctor at a glance just by entering the patient's detail page.

## Technical Challenges

* Usage of Actions.
* Lightning Base Components.
* Understanding the Component Library.
* Context-aware components.
* Front-end dataset processing.


## Steps to build

1. Define a Weight Measure object, with a Master-Detail relationship to Contact (Patients will be contacts) and a field where the actual weight measure can be stored.
2. create a lightning application with an autocomplete field to locate/search for contacts, upon selection the dataset for the last month will be shown.
3. Allow the doctor to create a new entry for the selected patient. 
4. Show a chart with all measures from last month as a continuous line. 
5. Show an chart with the trend for measures during the last month (if possible)
6. Show an indicator telling if the patient's weight went up or down, and by how much.
7. Enable the component to be injected in a contact's detail layout.

