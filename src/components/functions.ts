import { FamePlayer } from '@/components/models.ts'

export function loadAllFamePlayers (): FamePlayer[] {
  return [
    {
      id: 20210001,
      name: 'Chris Webber',
      position: 'F',
      year: 2021,
      achievements: [
        '5x NBA All-Star (1997, 2000-2003)',
        '1x All-NBA First Team (2001)',
        '3x All-NBA Second Team (1999, 2002, 2003)',
        '1x All-NBA Third Team (2000)',
        'NBA Rookie Of The Year (1994)',
        'NBA All-Rookie First Team (1994)',
        '1x NBA rebounding leader (1999)'
      ]
    },
    {
      id: 20210002,
      name: 'Ben Wallace',
      position: 'C',
      year: 2021,
      achievements: [
        'NBA champion (2004)',
        '4x NBA All-Star (2003-2006)',
        '4x NBA Defensive Player of the Year (2002, 2003, 2005, 2006)',
        '3x All-NBA Second Team (2003, 2004, 2006)',
        '2x All-NBA Third Team (2002, 2005)',
        '5x NBA All-Defensive First Team (2002-2006)',
        '1x NBA All-Defensive Second Team (2007)',
        '2x NBA rebounding leader (2002, 2003)',
        '1x NBA blocks leader (2002)',
        'First undrafted player in modern NBA history to be elected into the Basketball Hall of Fame.'
      ]
    },
    {
      id: 20210003,
      name: 'Paul Pierce',
      position: '',
      year: 2021,
      achievements: [
        'NBA champion (2008)',
        'NBA Finals MVP (2008)',
        '10x NBA All-Star (2002-2006, 2008-2012)',
        'NBA All-Rookie First Team (1999)',
        '1x All-NBA Second Team (2009)',
        '3x All-NBA Third Team (2002, 2003, 2008)'
      ]
    },
    {
      id: 20210004,
      name: 'Pearl Moor',
      position: '',
      year: 2021,
      achievements: [
        'Women’s college basketball all-time leader in points scored (4,061 Points)',
        '4x AIAW Small College All-American',
        'Averaged 30 points per game',
        'Scored in double figures in all 127 college games',
        'American Women’s Sports Foundation Small College Player of the Year (1979)',
        'South Carolina AIAW Player of the Year (1979)',
        'South Carolina Amateur Athlete of the Year (1979)',
        '1x WBL All-Star (1981)',
        'Enshrinee of the South Carolina Athletic Hall of Fame (2000)'
      ]
    },
    {
      id: 20210005,
      name: 'Toni Kukoč',
      position: 'F',
      year: 2021,
      achievements: [
        '3× NBA champion (1996–1998)',
        'NBA Sixth Man of the Year (1996)',
        'NBA All-Rookie Second Team (1994)',
        'FIBA World Championship MVP (1990)',
        'FIBA EuroBasket MVP (1991)',
        'FIBA\'s 50 Greatest Players (1991)',
        '5× Euroscar Player of the Year (1990, 1991, 1994, 1996, 1998)',
        '4× Mister Europa Player of the Year (1990–1992, 1996)',
        '3× EuroLeague champion (1989–1991)',
        '3× EuroLeague Final Four MVP (1990, 1991, 1993)',
        'EuroLeague Finals Top Scorer (1990)',
        'FIBA European Selection (1991)',
        '50 Greatest EuroLeague Contributors (2008)',
        'Italian League champion (1992)',
        'Italian Cup winner (1993)',
        '4× Yugoslav League champion (1988–1991)',
        '2× Yugoslav Cup winner (1990, 1991)',
        '3× Croatian Sportsman of the Year (1989–1991)',
        'Franjo Bučar State Award for Sport (1992)',
        'FIBA Under-19 World Cup MVP (1987)',
        '4× EuroBasket medalist  Gold: 1989, 1991,  Bronze: 1987, 1995',
        '2x FIBA World Cup medalist  Gold: 1990,  Bronze:1994',
        '2x Summer Olympics  Silver: 1988, 1992'
      ]
    }
  ]
}
