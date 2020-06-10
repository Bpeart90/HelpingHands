INSERT INTO volunteer.coordinator
    (id, email, createdAt, updatedAt)
VALUES
    (1, "soupKitchen@gmail.com", 0 , 0 );
INSERT INTO volunteer.coordinator
    (id, email, createdAt, updatedAt)
VALUES
    (2, "highwayCleanup@gmail.com", 0 , 0 );

INSERT INTO volunteer.volunteer
    (id, email, password,createdAt, updatedAt)
VALUES
    (1, "meow@gmail.com", "meow", 0 , 0 );
INSERT INTO volunteer.volunteer
    (id, email, password, createdAt, updatedAt)
VALUES
    (2, "bark@gmail.com", "bark", 0 , 0 );


INSERT INTO volunteer.opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, coordinatorId, volunteerId)
VALUES
    ('Soup Kitchen', "254-545-5484", "soupKitchen@gmail.com", "Line Cooks", true, 0 , 0 , 1 , 1  );
INSERT INTO volunteer.opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, coordinatorId, volunteerId)
VALUES
    ('Litter Cleanup', "267-548-5988", "highwayCleanup@gmail.com", "Sunday Morning Help", false, 0 , 0 , 1 , 1  );
INSERT INTO volunteer.opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, coordinatorId, volunteerId)
VALUES
    ('Blood Drive', "658-548-8575", "redCross@gmail.com", "Blood Drive Saturday", true, 0 , 0 , 1 , 1  );
INSERT INTO volunteer.opportunities
    (name, number, email, areaOfNeed, backgroundRequired, createdAt, updatedAt, coordinatorId, volunteerId)
VALUES
    ('Tutor Services', "564-484-5845", "learningAssistant@gmail.com", "Math Tutor Help", true, 0 , 0 , 1 , 1  );