USE trouve_ton_artisan;

-- Catégories --

INSERT INTO categories (nom) VALUES
('Bâtiment'),
('Services'),
('Fabrication'),
('Alimentation');

-- Spécialités --

INSERT INTO specialities (nom, category_id) VALUES
('Boucher', 4),
('Boulanger', 4),
('Chocolatier', 4),
('Traiteur', 4),
('Chauffagiste', 1),
('Electricien', 1),
('Menuisier', 1),
('Plombier', 1),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 2),
('Fleuriste', 2),
('Toiletteur', 2),
('Webdesign', 2);

-- Artisans --

INSERT INTO artisans (nom, note, speciality_id, localisation, a_propos, email, site_web, top_artisan) VALUES
('Boucherie Dumont', 4.5, 1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
'boucherie.dumond@gmail.com', NULL, FALSE),
('Au pain chaud', 4.8, 2, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'aupainchaud@hotmail.com', NULL, TRUE),
('Chocolaterie Labbé', 4.9, 3, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE),
('Traiteur Truchon', 4.1, 4, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@truchon-traiteur.fr','https://truchon-traiteur.fr', FALSE),
('Orville Salmons', 5.0, 5, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
'o-salmons@live.com', NULL, TRUE),
('Mont Blanc Eléctricité', 4.5, 6, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE),
('Boutot & fils', 4.7, 7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE),
('Vallis Bellemare', 4.0, 8, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE),
('Claude Quinn', 4.2, 9, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'claude.quinn@gmail.com', NULL, FALSE),
('Amitee Lécuyer', 4.5, 10, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE),
('Ernest Carignan', 5.0, 11, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'e-carigan@hotmail.com', NULL, FALSE),
('Royden Charbonneau', 3.8, 12, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'r.charbonneau@gmail.com', NULL, FALSE),
('Leala Dennis', 3.8, 12, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE),
('C''est sup''hair', 4.1, 12, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE),
('Le monde des fleurs', 4.6, 13, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE),
('Valérie Laderoute', 4.5, 14, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'v-laredoute@gmail.com', NULL, FALSE),
('CM Graphisme', 4.4, 15, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE);






