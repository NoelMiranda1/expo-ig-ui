import moment from 'moment';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

moment.locale('es', {
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    ss: '%d segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    w: 'una semana',
    ww: '%d semanas',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años'
  }
});

type Props = {
  likes: number;
  name: string;
  description: string;
  createdAt: string;
  comments: number;
};

const PostFooter: React.FC<Props> = ({
  likes,
  name,
  description,
  createdAt,
  comments,
}): React.ReactNode => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatDate = (dateString: string): string => {
    const date = moment(dateString);
    const now = moment();
    const diffHours = now.diff(date, 'hours');
    const diffDays = now.diff(date, 'days');
    
    if (diffHours < 1) {
      const diffMinutes = now.diff(date, 'minutes');
      if (diffMinutes < 1) return 'ahora mismo';
      return `hace ${diffMinutes}m`;
    }
    
    if (diffHours < 24) {
      return `hace ${diffHours}h`;
    }
    
    if (diffDays < 7) {
      return `hace ${diffDays}d`;
    }
    
    if (diffDays < 28) {
      const weeks = Math.floor(diffDays / 7);
      return `hace ${weeks}s`;
    }

    if (date.year() === now.year()) {
      return date.format('D [de] MMMM');
    }
    
    return date.format('D [de] MMMM [de] YYYY');
  };

  const truncatedDescription = description.length > 100 && !showFullDescription
    ? `${description.substring(0, 100)}...`
    : description;

  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{formatNumber(likes)} me gusta</Text>
      
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          <Text style={styles.name}>{name} </Text>
          {truncatedDescription}
          {description.length > 100 && !showFullDescription && (
            <Text
              style={styles.moreButton}
              onPress={() => setShowFullDescription(true)}
            >
              {' mas'}
            </Text>
          )}
        </Text>
      </View>
      
      {comments > 0 && (
        <Pressable>
          <Text style={styles.viewComments}>
            Ver todos {formatNumber(comments)} comentarios
          </Text>
        </Pressable>
      )}
      
      <Text style={styles.date}>{formatDate(createdAt)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likes: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  descriptionContainer: {
    marginBottom: 4,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 18,
  },
  name: {
    fontWeight: '600',
  },
  moreButton: {
    color: '#8e8e8e',
  },
  viewComments: {
    color: '#8e8e8e',
    fontSize: 14,
    marginTop: 4,
  },
  date: {
    color: '#8e8e8e',
    fontSize: 12,
    marginTop: 4,
  },
});

export default React.memo(PostFooter);