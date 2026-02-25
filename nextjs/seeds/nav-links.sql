-- Seed data for nav-links collection
-- PayloadCMS table structure for nav-links collection

-- Clear existing data (optional - comment out if you want to preserve existing data)
-- DELETE FROM "nav_links" WHERE "id" IN (
--     'skills-link',
--     'experience-link',
--     'about-link',
--     'phone-link',
--     'email-link',
--     'projects-link',
--     'instagram-link',
--     'github-link',
--     'linkedin-link'
-- );

-- Insert nav-links data
INSERT INTO "nav_links" (
    "id",
    "title",
    "href",
    "id_field",
    "icon",
    "buttonSize",
    "buttonVariant",
    "positionTop",
    "positionLeft",
    "isContactDialog",
    "createdAt",
    "updatedAt"
) VALUES
-- Skills
(
    gen_random_uuid(),
    'Skills',
    NULL,
    'skills',
    'Code',
    'size-48',
    'ghost',
    '20%',
    '20%',
    false,
    NOW(),
    NOW()
),
-- Experience
(
    gen_random_uuid(),
    'Experience',
    NULL,
    'experience',
    'GraduationCap',
    'size-40',
    'ghost',
    '40%',
    '80%',
    false,
    NOW(),
    NOW()
),
-- About
(
    gen_random_uuid(),
    'About',
    NULL,
    'about',
    'Mail',
    'size-44',
    'ghost',
    '60%',
    '60%',
    false,
    NOW(),
    NOW()
),
-- Phone
(
    gen_random_uuid(),
    'Phone',
    NULL,
    NULL,
    'Phone',
    'size-36',
    'default',
    '70%',
    '10%',
    true,
    NOW(),
    NOW()
),
-- Email
(
    gen_random_uuid(),
    'Email',
    NULL,
    NULL,
    'Mail',
    'size-36',
    'default',
    '10%',
    '90%',
    true,
    NOW(),
    NOW()
),
-- Projects
(
    gen_random_uuid(),
    'Projects',
    NULL,
    'projects',
    'FolderOpen',
    'size-70',
    'ghost',
    '0%',
    '50%',
    false,
    NOW(),
    NOW()
),
-- Instagram
(
    gen_random_uuid(),
    'Instagram',
    'https://www.instagram.com/eliaszanottiweb',
    NULL,
    'Instagram',
    'size-32',
    'ghost',
    '65%',
    '30%',
    false,
    NOW(),
    NOW()
),
-- Github
(
    gen_random_uuid(),
    'Github',
    'https://github.com/eliaszanotti',
    NULL,
    'Github',
    'size-32',
    'ghost',
    '80%',
    '80%',
    false,
    NOW(),
    NOW()
),
-- Linkedin
(
    gen_random_uuid(),
    'Linkedin',
    'https://www.linkedin.com/in/elias-zanotti-42-school',
    NULL,
    'Linkedin',
    'size-32',
    'ghost',
    '90%',
    '40%',
    false,
    NOW(),
    NOW()
);

-- Alternative version with explicit UUIDs (more predictable)
-- Uncomment and use instead if you prefer fixed IDs

-- INSERT INTO "nav_links" (
--     "id",
--     "title",
--     "href",
--     "id_field",
--     "icon",
--     "buttonSize",
--     "buttonVariant",
--     "positionTop",
--     "positionLeft",
--     "isContactDialog",
--     "createdAt",
--     "updatedAt"
-- ) VALUES
-- ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Skills', NULL, 'skills', 'Code', 'size-48', 'ghost', '20%', '20%', false, NOW(), NOW()),
-- ('b1c2d3e4-f5g6-7890-bcde-f12345678901', 'Experience', NULL, 'experience', 'GraduationCap', 'size-40', 'ghost', '40%', '80%', false, NOW(), NOW()),
-- ('c1d2e3f4-g5h6-7890-cdef-123456789012', 'About', NULL, 'about', 'Mail', 'size-44', 'ghost', '60%', '60%', false, NOW(), NOW()),
-- ('d1e2f3g4-h5i6-7890-defg-234567890123', 'Phone', NULL, NULL, 'Phone', 'size-36', 'default', '70%', '10%', true, NOW(), NOW()),
-- ('e1f2g3h4-i5j6-7890-efgh-345678901234', 'Email', NULL, NULL, 'Mail', 'size-36', 'default', '10%', '90%', true, NOW(), NOW()),
-- ('f1g2h3i4-j5k6-7890-fghi-456789012345', 'Projects', NULL, 'projects', 'FolderOpen', 'size-70', 'ghost', '0%', '50%', false, NOW(), NOW()),
-- ('g1h2i3j4-k5l6-7890-ghij-567890123456', 'Instagram', 'https://www.instagram.com/eliaszanottiweb', NULL, 'Instagram', 'size-32', 'ghost', '65%', '30%', false, NOW(), NOW()),
-- ('h1i2j3k4-l5m6-7890-hijk-678901234567', 'Github', 'https://github.com/eliaszanotti', NULL, 'Github', 'size-32', 'ghost', '80%', '80%', false, NOW(), NOW()),
-- ('i1j2k3l4-m5n6-7890-ijkl-789012345678', 'Linkedin', 'https://www.linkedin.com/in/elias-zanotti-42-school', NULL, 'Linkedin', 'size-32', 'ghost', '90%', '40%', false, NOW(), NOW());
