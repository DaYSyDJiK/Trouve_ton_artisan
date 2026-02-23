USE trouve_ton_artisan;

-- CATEGORIES (4)
INSERT INTO categorie (id, nom) VALUES
(1, 'Alimentation'),
(2, 'Bâtiment'),
(3, 'Fabrication'),
(4, 'Services');


-- 2) SPECIALITES (11)

INSERT INTO specialite (id, nom, categorie_id) VALUES
-- Alimentation
(1, 'Boucher', 1),
(2, 'Boulanger', 1),
(3, 'Chocolatier', 1),
(4, 'Traiteur', 1),

-- Bâtiment
(5, 'Chauffagiste', 2),
(6, 'Electricien', 2),
(7, 'Menuisier', 2),
(8, 'Plombier', 2),

-- Fabrication
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),

-- Services
(12, 'Coiffeur', 4),
(13, 'Fleuriste', 4),
(14, 'Toiletteur', 4),
(15, 'Webdesign', 4);


-- 3) ARTISANS (17)
-- is_top : 1 = VRAI, 0 = FAUX


INSERT INTO artisan
(nom, specialite_id, note, ville, description, email, site_web, image, is_top)
VALUES

-- Alimentation
('Boucherie Dumont', 1, 4.5, 'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'boucherie.dumond@gmail.com', NULL, NULL, 0),

('Au pain chaud', 2, 4.8, 'Montélimar',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'aupainchaud@hotmail.com', NULL, NULL, 1),

('Chocolaterie Labbé', 3, 4.9, 'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', NULL, 1),

('Traiteur Truchon', 4, 4.1, 'Lyon',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', NULL, 0),

-- Bâtiment
('Orville Salmons', 5, 5.0, 'Evian',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'o-salmons@live.com', NULL, NULL, 1),

('Mont Blanc Eléctricité', 6, 4.5, 'Chamonix',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', NULL, 0),

('Boutot & fils', 7, 4.7, 'Bourg-en-bresse',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', NULL, 0),

('Vallis Bellemare', 8, 4.0, 'Vienne',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', NULL, 0),

-- Fabrication
('Claude Quinn', 9, 4.2, 'Aix-les-bains',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'claude.quinn@gmail.com', NULL, NULL, 0),

('Amitee Lécuyer', 10, 4.5, 'Annecy',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'a.amitee@hotmail.com', 'https://lecuyer-couture.com', NULL, 0),

('Ernest Carignan', 11, 5.0, 'Le Puy-en-Velay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'e-carigan@hotmail.com', NULL, NULL, 0),

-- Services
('Royden Charbonneau', 12, 3.8, 'Saint-Priest',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'r.charbonneau@gmail.com', NULL, NULL, 0),

('Leala Dennis', 12, 3.8, 'Chambéry',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', NULL, 0),

('C''est sup''hair', 12, 4.1, 'Romans-sur-Isère',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'sup-hair@gmail.com', 'https://sup-hair.fr', NULL, 0),

('Le monde des fleurs', 13, 4.6, 'Annonay',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', NULL, 0),

('Valérie Laderoute', 14, 4.5, 'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'v-laredoute@gmail.com', NULL, NULL, 0),

('CM Graphisme', 15, 4.4, 'Valence',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@cm-graphisme.com', 'https://cm-graphisme.com', NULL, 0);