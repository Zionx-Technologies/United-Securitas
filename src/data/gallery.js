// Gallery page copy and photo list, from the client's content document.
// Captions describe only what each photo shows, per the content brief.

export const meta = {
  title: 'Gallery | United Securitas, Chennai',
  description:
    'Photos of United Securitas guards on duty, in training and at events across Chennai. Security services in Chennai since 2004.',
  path: '/gallery/',
}

export const hero = {
  title: 'United Securitas in Action',
  subline: 'A look at our guards on duty, in training and at events across Chennai.',
}

export const intro =
  'Since 2004, United Securitas has delivered security services in Chennai for homes, workplaces and events. These photos show the people behind that work: guards at their posts, firefighting and first-aid drills, and the briefings that keep every team ready.'

export const categories = [
  { id: 'training', title: 'Training & Drills', text: 'Firefighting, first aid and induction sessions.' },
  { id: 'duty', title: 'On Duty', text: 'Guards at gates, posts and patrols.' },
  { id: 'events', title: 'Events', text: 'Crowd management and event security.' },
  { id: 'team', title: 'Our Team', text: 'Briefings, officers and group photos.' },
]

const p = (cat, src, caption, alt) => ({ cat, src, caption, alt })

export const photos = [
  // Training & Drills
  p('training', '/gallery/24.jpeg', 'Putting out a tray fire with an extinguisher', 'United Securitas guard putting out a tray fire with an extinguisher, Chennai'),
  p('training', '/gallery/22.jpeg', 'Guards directing a fire hose', 'United Securitas guards in firefighting training with a fire hose, Chennai'),
  p('training', '/gallery/30.jpeg', 'CPR practice on a training mannequin', 'United Securitas guard practising CPR on a mannequin during first-aid training'),
  p('training', '/gallery/25.jpeg', 'Smothering tray fires with wet sacks', 'United Securitas guards smothering tray fires with wet sacks in a fire drill'),
  p('training', '/images/gallery-11.jpg', 'First-aid demonstration in class', 'United Securitas trainer demonstrating first aid to a group of guards'),
  p('training', '/gallery/17.jpeg', 'Hose drill with a trainer', 'United Securitas guards in a fire hose drill with a trainer, Chennai'),
  p('training', '/gallery/35.jpeg', 'Choking first aid on a mannequin', 'Trainer demonstrating choking first aid on a mannequin to a United Securitas guard'),
  p('training', '/gallery/27.jpeg', 'Extinguisher demonstration on a tray fire', 'Trainer demonstrating a fire extinguisher to United Securitas guards'),
  p('training', '/gallery/32.jpeg', 'Two-person casualty carry drill', 'United Securitas guards practising a two-person casualty carry'),
  p('training', '/gallery/16.jpeg', 'Learning to handle a hose nozzle', 'Instructor showing United Securitas guards how to handle a fire hose nozzle'),
  p('training', '/gallery/33.jpeg', 'Smothering flames during a fire drill', 'United Securitas guards smothering flames with sacks during a fire drill'),
  p('training', '/images/gallery-13.jpg', 'Classroom session on safety procedures', 'United Securitas trainer leading a classroom session on safety procedures'),
  p('training', '/gallery/13.jpeg', 'Hydrant and hose reel practice', 'United Securitas guard practising with a hydrant and hose reel'),
  p('training', '/gallery/19.jpeg', 'Casualty carry practice', 'United Securitas guards practising a casualty carry in a training room'),
  // On Duty
  p('duty', '/gallery/gallery-15.jpg', 'Two guards on duty at a site gate', 'Two United Securitas security guards on duty at a site gate in Chennai'),
  p('duty', '/gallery/gallery-28.jpg', 'Guard on the radio inside a mall', 'United Securitas security guard using a radio inside a shopping mall'),
  p('duty', '/gallery/guard-office-campus.jpg', 'Guard on the radio at an office campus', 'United Securitas security guard using a radio outside an office building'),
  p('duty', '/gallery/cctv-operator.jpg', 'Operator watching CCTV screens', 'United Securitas operator monitoring CCTV screens'),
  // Events
  p('events', '/gallery/event-screening.jpg', 'Entry screening at an event', 'United Securitas event security team screening visitors at an entry point'),
  // Our Team
  p('team', '/images/gallery-09.jpg', 'Guards in formation for inspection', 'United Securitas security guards standing in formation for inspection'),
  p('team', '/gallery/20.jpeg', 'Team photo with first-aid and fire equipment', 'United Securitas guards and trainers with first-aid and firefighting equipment'),
  p('team', '/gallery/gallery-16.jpg', 'Officer leading the salute', 'United Securitas officer leading guards in a salute'),
  p('team', '/gallery/11.jpeg', 'Guards and trainers, group photo', 'Group photo of United Securitas guards and trainers'),
  p('team', '/gallery/gallery-21.jpg', 'Guards saluting at an assembly', 'United Securitas guards saluting at an outdoor assembly'),
  p('team', '/gallery/gallery-26.jpg', 'Night assembly and salute', 'United Securitas guards saluting at a night assembly'),
  p('team', '/gallery/gallery-17.jpg', 'Guards at salute', 'Close-up of United Securitas guards saluting'),
  p('team', '/images/gallery-10.jpg', 'Briefing session with guards', 'United Securitas officers briefing a group of guards'),
  p('team', '/gallery/34.jpeg', 'Guards and trainers with fire equipment', 'United Securitas guards gathered with firefighting equipment'),
  p('team', '/gallery/gallery-19.jpg', 'Guards lined up at an assembly', 'United Securitas guards standing at an assembly outside a building'),
]

export const closing = {
  title: 'Want This Team at Your Site?',
  subline: 'Trusted security services in Chennai, planned around your premises.',
  button: 'Book a Free Site Survey',
}
