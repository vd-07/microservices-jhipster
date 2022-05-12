package com.dealer.app.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.dealer.app.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class DealerTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Dealer.class);
        Dealer dealer1 = new Dealer();
        dealer1.setId(1L);
        Dealer dealer2 = new Dealer();
        dealer2.setId(dealer1.getId());
        assertThat(dealer1).isEqualTo(dealer2);
        dealer2.setId(2L);
        assertThat(dealer1).isNotEqualTo(dealer2);
        dealer1.setId(null);
        assertThat(dealer1).isNotEqualTo(dealer2);
    }
}
