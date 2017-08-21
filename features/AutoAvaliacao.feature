@i9n
Feature: Self-Assessment
	As a professor
	I want my students to be able to self-assess theirs goals with the concepts: MANA, MPA, and MA
	So that I’m able to compare the concepts given and to review my assessments based on the theirs assessments

	Scenario: Submit Self-Assessment (Controller)
		Given that the student "Pedro" hasn’t submitted his self-assessment yet
		And there are "Entender conceitos de requisitos", "Especificar requisitos com qualidade", and "Entender conceitos de gerência de configuração" goals to be self-assess
		When "Pedro" submits his self-assessment with concept "MA" for goals "Entender conceitos de requisitos", "Especificar requisitos com qualidade", and "Entender conceitos de gerência de configuração"
		Then the self-assessment is successfully stored by the system

	Scenario: Submit Self-Assessment (GUI)
		Given that the student "Pedro" hasn’t submitted his self-assessment yet
		And there are "Entender conceitos de requisitos", "Especificar requisitos com qualidade", and "Entender conceitos de gerência de configuração" goals to be self-assess
		And he is at "Self-Assessment Page"
		When "Pedro" assesses the goals "Entender conceitos de requisitos", "Especificar requisitos com qualidade", and "Entender conceitos de gerência de configuração" with concept "MA"
		Then "Pedro" sees a confirmation message

	Scenario: Submit Self-Assessment (Controller)
		Given that the student "Pedro" hasn’t submitted his self-assessment yet
		And there are "Entender conceitos de requisitos", "Especificar requisitos com qualidade", and "Entender conceitos de gerência de configuração" goals to be self-assess
		When "Pedro" submits his self-assessment with concept "MA" for goals "Entender conceitos de requisitos", and "Especificar requisitos com qualidade"
		Then the self-assessment isn’t stored by the system

	Scenario: Submit Self-Assessment (GUI)
		Given that the student "Pedro" hasn’t submitted his self-assessment yet, there are "Entender conceitos de requisitos", "Especificar requisitos com qualidade", and "Entender conceitos de gerência de configuração" goals to be self-assess
		And he is at "Self-Assessment Page"
		When "Pedro" assesses the goals "Entender conceitos de requisitos", and "Especificar requisitos com qualidade" with concept "MA"
		Then "Pedro" sees an error message
